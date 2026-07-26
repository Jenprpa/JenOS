import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from "react";
import {
  createNaturalInput,
  deterministicNaturalInterpreter,
  routeCandidate,
  type NaturalInterpretation,
  type ReminderOffsetMinutes,
  type RouteAuthority,
  type RouteCandidate,
  type RouteFamily,
  type RoutedRecord,
} from "../application/natural-routing";
import { buildDestinationView } from "../application/routed-destinations";
import { buildLedger, calculateLedgerTotals, formatThaiBaht } from "../application/finance-ledger";
import {
  buildReminder,
  dueReminders,
  editReminder,
  removeReminder,
} from "../application/reminders";
import {
  buildPersonalCareSummary,
  createCapacityRecommendation,
  mealStatusLabel,
} from "../application/personal-care";
import {
  applyInstructionResolution,
  resolveOwnerInstruction,
  type InstructionResolution,
} from "../application/command-resolution";
import { createBackup, createPersistedData, parseBackup } from "../application/persistence-model";
import {
  budgieTheme,
  customizeTheme,
  resetThemeToBudgie,
  selectThemePreset,
  themeToCssVariables,
  type OwnerTheme,
} from "../application/theme-system";
import { IndexedDbJenOSStore } from "../infrastructure/storage/indexeddb-jenos-store";
import type { TechnicalHealth } from "../application/health";
import type { AppEnvironment } from "../app/environment";

interface Props {
  readonly environment: AppEnvironment;
  readonly health: TechnicalHealth;
}

type CandidateStatus = "pending" | "accepted" | "rejected";

const jenosStore = new IndexedDbJenOSStore();
const sampleInputs = [
  "พรุ่งนี้ 4/1 สอนเรื่องเซลล์ เตือนก่อน 1 ชั่วโมง",
  "วันนี้จ่ายค่าถ่ายเอกสาร 420 บาท",
  "วันนี้ได้ค่าสอนพิเศษ 1,500 บาท",
  "พรุ่งนี้สอน 4/1 เรื่องเซลล์ เตือนก่อน 1 ชั่วโมง แล้ววันนี้จ่ายค่าปริ้นท์ใบงาน 350 บาท",
  "เงิน 500 เรื่อง 4/1",
  "เมื่อคืนได้นอน 5 ชั่วโมง วันนี้ยังไม่ได้กินข้าวเช้า",
  "วันนี้พลังเหลือครึ่งเดียว แต่ต้องส่งรายงานก่อนบ่ายสาม",
  "กินข้าวเที่ยงแล้ว เย็นนี้เตือนกินข้าวตอนหนึ่งทุ่ม",
];
const reminderOptions: readonly { label: string; value: ReminderOffsetMinutes }[] = [
  { label: "เมื่อถึงเวลา", value: 0 },
  { label: "ก่อน 10 นาที", value: 10 },
  { label: "ก่อน 30 นาที", value: 30 },
  { label: "ก่อน 1 ชั่วโมง", value: 60 },
  { label: "ก่อน 1 วัน", value: 1440 },
];

export function TechnicalShell({ environment, health }: Props) {
  const [naturalText, setNaturalText] = useState("");
  const [interpretation, setInterpretation] = useState<NaturalInterpretation | null>(null);
  const [candidateStatuses, setCandidateStatuses] = useState<Record<string, CandidateStatus>>({});
  const [routedRecords, setRoutedRecords] = useState<readonly RoutedRecord[]>([]);
  const [pendingInstruction, setPendingInstruction] = useState<InstructionResolution | null>(null);
  const [theme, setTheme] = useState<OwnerTheme>(budgieTheme);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restorePreview, setRestorePreview] = useState<{
    readonly routedCount: number;
    readonly themeName: string;
    readonly data: ReturnType<typeof createPersistedData>;
  } | null>(null);
  const [notice, setNotice] = useState(
    "เล่าเป็นภาษาคนได้เลย JenOS จะจัดโลกให้ แต่ไม่ตัดสินใจแทนคุณ",
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const pendingCandidates = useMemo(
    () =>
      interpretation?.candidates.filter(
        (candidate) => (candidateStatuses[candidate.id] ?? "pending") === "pending",
      ) ?? [],
    [candidateStatuses, interpretation],
  );
  const destinationView = useMemo(() => buildDestinationView(routedRecords), [routedRecords]);
  const ledger = useMemo(() => buildLedger(routedRecords), [routedRecords]);
  const totals = useMemo(() => calculateLedgerTotals(ledger), [ledger]);
  const personalCare = useMemo(() => buildPersonalCareSummary(routedRecords), [routedRecords]);
  const capacityRecommendation = useMemo(
    () => createCapacityRecommendation({ records: routedRecords }),
    [routedRecords],
  );
  const reminders = useMemo(
    () =>
      routedRecords.flatMap((record) => {
        const reminder = buildReminder(record);
        return reminder ? [reminder] : [];
      }),
    [routedRecords],
  );
  const due = useMemo(() => dueReminders(reminders, new Date().toISOString()), [reminders]);
  const themeStyle = themeToCssVariables(theme) as CSSProperties;

  useEffect(() => {
    let active = true;

    jenosStore
      .load()
      .then((data) => {
        if (!active) return;
        setRoutedRecords(data.routedRecords);
        setTheme(data.theme);
        setIsLoaded(true);
      })
      .catch(() => {
        if (!active) return;
        setNotice("โหลดข้อมูลบางส่วนไม่สำเร็จ JenOS จะไม่ล้างข้อมูลให้อัตโนมัติ");
        setIsLoaded(true);
      });

    return () => {
      active = false;
    };
  }, []);

  async function persist(
    nextRecords: readonly RoutedRecord[],
    nextTheme: OwnerTheme,
  ): Promise<void> {
    await jenosStore.save(createPersistedData({ routedRecords: nextRecords, theme: nextTheme }));
  }

  function handleInterpret(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const input = createNaturalInput({
      id: crypto.randomUUID(),
      text: naturalText,
      enteredAt: new Date().toISOString(),
    });
    setInterpretation(deterministicNaturalInterpreter.interpret(input));
    setCandidateStatuses({});
    setNaturalText("");
    setNotice("JenOS เข้าใจประมาณนี้ เลือกเฉพาะสิ่งที่ตรงกับความจริง");
  }

  function handleCandidateDecision(candidate: RouteCandidate, status: CandidateStatus): void {
    if (status === "rejected") {
      setCandidateStatuses((current) => ({ ...current, [candidate.id]: status }));
      setNotice("ไม่บันทึกข้อเสนอนี้แล้ว ข้อมูลที่ปฏิเสธจะไม่ถูกเก็บเป็นความจริง");
      return;
    }

    if (candidate.ownerInstruction) {
      const resolution = resolveOwnerInstruction(candidate, routedRecords);
      setPendingInstruction(resolution);
      setNotice(
        resolution
          ? "JenOS ตรวจงานที่คำสั่งนี้อาจกระทบแล้ว กรุณายืนยันก่อนเปลี่ยนข้อมูลจริง"
          : "JenOS ยังจัดการคำสั่งนี้ไม่ได้โดยไม่เดาเพิ่ม",
      );
      return;
    }

    setCandidateStatuses((current) => ({ ...current, [candidate.id]: status }));

    const routed = routeCandidate(candidate, {
      actor: "owner",
      outcome: "accepted",
      routedRecordId: crypto.randomUUID(),
      decidedAt: new Date().toISOString(),
    });

    if (!routed) return;

    setRoutedRecords((current) => {
      const nextRecords = [routed, ...current];
      void persist(nextRecords, theme);
      return nextRecords;
    });
    setNotice("จัดให้แล้ว และบันทึกไว้ในเครื่องนี้แล้ว");
  }

  function confirmInstructionResolution(): void {
    if (!pendingInstruction) return;

    const decidedAt = new Date().toISOString();
    const routed = routeCandidate(pendingInstruction.instruction, {
      actor: "owner",
      outcome: "accepted",
      routedRecordId: crypto.randomUUID(),
      decidedAt,
    });

    if (!routed) return;

    setRoutedRecords((current) => {
      const nextRecords = applyInstructionResolution({
        records: current,
        instructionRecord: routed,
        resolution: pendingInstruction,
        decidedAt,
      });
      void persist(nextRecords, theme);
      return nextRecords;
    });
    setCandidateStatuses((current) => ({
      ...current,
      [pendingInstruction.instruction.id]: "accepted",
    }));
    setPendingInstruction(null);
    setNotice("เลื่อนงานที่เข้าเงื่อนไขแล้ว ข้อมูลถูกเปลี่ยนหลังคุณยืนยัน");
  }

  function updateRecord(nextRecord: RoutedRecord): void {
    setRoutedRecords((current) => {
      const nextRecords = current.map((record) =>
        record.id === nextRecord.id ? nextRecord : record,
      );
      void persist(nextRecords, theme);
      return nextRecords;
    });
  }

  function applyTheme(nextTheme: OwnerTheme): void {
    setTheme(nextTheme);
    void persist(routedRecords, nextTheme);
  }

  function handleExport(): void {
    const exportedAt = new Date().toISOString();
    const backup = createBackup(createPersistedData({ routedRecords, theme }), exportedAt);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `jenos-backup-${exportedAt.slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice("สร้างสำเนาข้อมูล JenOS ของคุณแล้ว");
  }

  async function handleRestoreFile(file: File): Promise<void> {
    try {
      const result = parseBackup(JSON.parse(await file.text()) as unknown);
      setRestorePreview({
        routedCount: result.data.routedRecords.length,
        themeName: result.data.theme.preset,
        data: result.data,
      });
      setNotice("ตรวจไฟล์สำรองแล้ว กดยืนยันอีกครั้งถ้าต้องการแทนที่ข้อมูลในเครื่องนี้");
    } catch {
      setNotice("ไฟล์สำรองไม่ถูกต้อง ข้อมูลเดิมยังอยู่ครบ");
    }
  }

  async function confirmRestore(): Promise<void> {
    if (!restorePreview) return;
    setRoutedRecords(restorePreview.data.routedRecords);
    setTheme(restorePreview.data.theme);
    await jenosStore.save(restorePreview.data);
    setRestorePreview(null);
    setNotice("กู้คืนข้อมูลจากสำเนาแล้ว");
  }

  async function clearLocalData(): Promise<void> {
    const confirmed = window.confirm(
      "ล้างข้อมูล JenOS ในเครื่องนี้ทั้งหมดใช่ไหม? การกระทำนี้ย้อนกลับไม่ได้ถ้าไม่มี backup",
    );
    if (!confirmed) return;
    await jenosStore.clear();
    setRoutedRecords([]);
    setTheme(budgieTheme);
    setRestorePreview(null);
    setNotice("ล้างข้อมูล JenOS ในเครื่องนี้แล้ว");
  }

  return (
    <main className="shell" style={themeStyle}>
      <section className="hero-panel" aria-labelledby="app-title">
        <p className="eyebrow">Local Memory Foundation</p>
        <h1 id="app-title">JenOS</h1>
        <p className="summary">พื้นที่จัดการเรื่องต่าง ๆ ในชีวิต</p>
        <nav className="simple-nav" aria-label="พื้นที่หลักของ JenOS">
          <a href="#talk">คุยกับ JenOS</a>
          <a href="#board">กระดานของฉัน</a>
          <a href="#care">วันนี้ของฉัน</a>
          <a href="#calendar">ปฏิทิน</a>
          <a href="#finance">การเงิน</a>
          <a href="#settings">ธีม</a>
          <a href="#data">ข้อมูลของฉัน</a>
        </nav>
      </section>

      <section className="natural-workspace" id="talk" aria-label="Natural capture routing">
        <form className="input-panel" onSubmit={handleInterpret}>
          <div className="panel-header">
            <p className="soft-label">เริ่มจากความจริงก่อน</p>
            <h2>มีอะไรเกิดขึ้น เล่าให้ JenOS ฟังได้เลย</h2>
            <p>ข้อมูลที่คุณยืนยันแล้วจะถูกเก็บไว้ใน browser/device นี้ และกู้คืนจาก backup ได้</p>
          </div>
          <textarea
            aria-label="เล่าเรื่องที่เกิดขึ้น"
            value={naturalText}
            onChange={(event) => setNaturalText(event.target.value)}
            placeholder="เช่น พรุ่งนี้ 4/1 สอนเรื่องเซลล์ เตือนก่อน 1 ชั่วโมง"
            rows={7}
          />
          <div className="input-actions">
            <button type="submit" disabled={naturalText.trim().length === 0 || !isLoaded}>
              ให้ JenOS แยกความหมาย
            </button>
            <p className="microcopy">
              {isLoaded
                ? "ข้อมูลที่ยืนยันแล้วจะอยู่รอดหลัง refresh"
                : "กำลังโหลดความจำของ JenOS..."}
            </p>
          </div>
          <div className="sample-row" aria-label="ตัวอย่างสำหรับ owner pilot">
            {sampleInputs.map((sample) => (
              <button
                className="sample-chip"
                key={sample}
                type="button"
                onClick={() => setNaturalText(sample)}
              >
                {sample}
              </button>
            ))}
          </div>
        </form>

        <p className="notice" role="status">
          {notice}
        </p>

        {due.length > 0 ? (
          <section className="reminder-surface" aria-label="แจ้งเตือนใน JenOS">
            <h2>ถึงเวลาเตือนแล้ว</h2>
            {due.map((reminder) => (
              <p key={reminder.id}>{reminder.label}</p>
            ))}
          </section>
        ) : null}

        {interpretation ? (
          <section className="interpretation-panel" aria-labelledby="interpretation-title">
            <div className="panel-header">
              <p className="soft-label">JenOS เข้าใจประมาณนี้</p>
              <h2 id="interpretation-title">เลือกเฉพาะสิ่งที่ตรงกับความจริง</h2>
            </div>
            <article className="source-card">
              <p className="soft-label">ข้อความต้นฉบับ</p>
              <p>{interpretation.input.text}</p>
            </article>
            <div className="candidate-grid">
              {interpretation.candidates.map((candidate) => {
                const status = candidateStatuses[candidate.id] ?? "pending";
                return (
                  <article className={`candidate-card ${status}`} key={candidate.id}>
                    <div className="candidate-heading">
                      <span className="route-icon" aria-hidden="true">
                        {familyIcon(candidate.family)}
                      </span>
                      <div>
                        <h3>{candidate.title}</h3>
                        <p>{candidate.summary}</p>
                      </div>
                    </div>
                    {candidate.reminder ? (
                      <p className="candidate-detail">{candidate.reminder.label}</p>
                    ) : null}
                    {candidate.detail ? (
                      <p className="candidate-detail">{candidate.detail}</p>
                    ) : null}
                    <div className="candidate-meta">
                      <span>{authorityLabel(candidate.authority)}</span>
                      <span>{contextLabel(candidate.contextStatus)}</span>
                    </div>
                    {status === "pending" ? (
                      <div className="candidate-actions">
                        <button
                          type="button"
                          onClick={() => handleCandidateDecision(candidate, "accepted")}
                        >
                          {acceptLabel(candidate.authority)}
                        </button>
                        <button
                          className="ghost-button"
                          type="button"
                          onClick={() => handleCandidateDecision(candidate, "rejected")}
                        >
                          ไม่ใช่อันนี้
                        </button>
                      </div>
                    ) : (
                      <p className="candidate-status">
                        {status === "accepted" ? "ยืนยันแล้ว" : "ไม่บันทึกแล้ว"}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
            {pendingCandidates.length === 0 ? (
              <p className="done-note">ข้อเสนอรอบนี้ถูกตรวจครบแล้ว</p>
            ) : null}
            {pendingInstruction ? (
              <section className="instruction-preview" aria-label="ตรวจคำสั่งก่อนเปลี่ยนข้อมูล">
                <div className="panel-header">
                  <p className="soft-label">ตรวจคำสั่งก่อนทำจริง</p>
                  <h3>{pendingInstruction.instruction.summary}</h3>
                  <p>{pendingInstruction.reason}</p>
                </div>
                <div className="instruction-columns">
                  <div>
                    <strong>จะเลื่อนออกจากวันนี้</strong>
                    {pendingInstruction.toDefer.length === 0 ? (
                      <p className="empty-state">ยังไม่พบงานที่เข้าเงื่อนไขจากข้อมูลปัจจุบัน</p>
                    ) : (
                      <ul>
                        {pendingInstruction.toDefer.map((record) => (
                          <li key={record.id}>{record.summary}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    <strong>คงไว้เพราะมีเวลาหรือ commitment ผูกอยู่</strong>
                    {pendingInstruction.toKeep.length === 0 ? (
                      <p className="empty-state">ยังไม่พบงานเร่งจากข้อมูลปัจจุบัน</p>
                    ) : (
                      <ul>
                        {pendingInstruction.toKeep.map((record) => (
                          <li key={record.id}>{record.summary}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="candidate-actions">
                  <button
                    type="button"
                    disabled={pendingInstruction.toDefer.length === 0}
                    onClick={confirmInstructionResolution}
                  >
                    ยืนยันการเลื่อน
                  </button>
                  <button
                    className="ghost-button"
                    type="button"
                    onClick={() => setPendingInstruction(null)}
                  >
                    ยังไม่ทำ
                  </button>
                </div>
              </section>
            ) : null}
          </section>
        ) : null}

        <section className="life-board" id="board" aria-labelledby="board-title">
          <div className="panel-header">
            <p className="soft-label">กระดานของฉัน</p>
            <h2 id="board-title">โลกของคุณที่ถูกจัดไว้แล้ว</h2>
            <p>กระดานนี้สร้างจากความจริงที่ persist ไว้ ไม่ใช่ activity log ชั่วคราว</p>
          </div>
          <div className="board-grid">
            {destinationView.sections.map((section) => (
              <section
                className={`board-section ${section.destination}`}
                key={section.destination}
                aria-label={section.title}
              >
                <div className="board-section-header">
                  <span aria-hidden="true">{section.icon}</span>
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>
                {section.items.length === 0 ? (
                  <p className="empty-state">ยังไม่มีอะไรในช่องนี้</p>
                ) : (
                  <div className="board-card-list">
                    {section.items.map((item) => (
                      <article className="board-card" key={item.id}>
                        <div className="board-card-topline">
                          <strong>{item.summary}</strong>
                          {item.isNew ? <span aria-label="รายการใหม่">ใหม่</span> : null}
                        </div>
                        {item.displayDate ? <p>{item.displayDate}</p> : null}
                        {item.detail ? <small>{item.detail}</small> : null}
                        {item.contextStatus === "unresolved" ? <em>บริบทยังไม่ชัด</em> : null}
                      </article>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className="personal-care-panel" id="care" aria-labelledby="care-title">
          <div className="panel-header">
            <p className="soft-label">วันนี้ของฉัน</p>
            <h2 id="care-title">พลังและการดูแลตัวเองแบบเบา ๆ</h2>
            <p>
              ส่วนนี้มาจากสิ่งที่คุณยืนยันเองเท่านั้น JenOS ใช้เพื่อช่วยเลือกจังหวะและขอบเขตงาน
              ไม่ใช่การให้คะแนนสุขภาพหรือ productivity
            </p>
          </div>
          <div className="care-grid">
            <article className="care-card sleep">
              <span aria-hidden="true">🌙</span>
              <div>
                <h3>การนอน</h3>
                <p>{personalCare.latestSleep?.label ?? "ยังไม่มีข้อมูลการนอนที่ยืนยันแล้ว"}</p>
              </div>
            </article>
            <article className="care-card meal">
              <span aria-hidden="true">🍚</span>
              <div>
                <h3>มื้ออาหาร</h3>
                <p>เช้า: {mealStatusLabel(personalCare.meals.breakfast)}</p>
                <p>กลางวัน: {mealStatusLabel(personalCare.meals.lunch)}</p>
                <p>เย็น: {mealStatusLabel(personalCare.meals.dinner)}</p>
              </div>
            </article>
            <article className="care-card capacity">
              <span aria-hidden="true">💜</span>
              <div>
                <h3>พลังงาน / ความพร้อม</h3>
                <p>
                  {personalCare.latestCapacity?.label ?? "ยังไม่มี self-report เรื่องพลังงานวันนี้"}
                </p>
              </div>
            </article>
          </div>
          <article className="capacity-recommendation">
            <div>
              <p className="soft-label">JenOS เสนอแบบมีหลักฐาน</p>
              <h3>{capacityRecommendation.title}</h3>
              <p>{capacityRecommendation.guidance}</p>
            </div>
            <div className="recommendation-evidence">
              <strong>เหตุผล</strong>
              <ul>
                {capacityRecommendation.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <small>
                ความมั่นใจ: {capacityRecommendation.confidence === "medium" ? "ปานกลาง" : "ต่ำ"} •
                เจ้าของยังเป็นคนตัดสินใจ
              </small>
            </div>
          </article>
          {personalCare.recentRecords.length > 0 ? (
            <div className="care-history" aria-label="ประวัติการดูแลตัวเองล่าสุด">
              {personalCare.recentRecords.map((record) => (
                <article key={record.id}>
                  <strong>{record.title}</strong>
                  <p>{record.summary}</p>
                </article>
              ))}
            </div>
          ) : null}
        </section>

        <section className="calendar-panel" id="calendar" aria-labelledby="calendar-title">
          <div className="panel-header">
            <p className="soft-label">ปฏิทิน JenOS</p>
            <h2 id="calendar-title">สิ่งที่ควรเห็นเป็นเวลา</h2>
            <p>ยังไม่เชื่อม Google Calendar ข้อมูลอยู่ในเครื่องนี้</p>
          </div>
          {destinationView.calendarItems.length === 0 ? (
            <p className="empty-state">ยังไม่มีเรื่องที่ถูกส่งเข้าปฏิทิน JenOS</p>
          ) : (
            <div className="calendar-list">
              {destinationView.calendarItems.map((item) => {
                const sourceRecord = routedRecords.find(
                  (record) => record.id === item.sourceRecordId,
                );
                return (
                  <article className={`calendar-card ${item.scheduleKind}`} key={item.id}>
                    <time>{item.displayDate}</time>
                    <strong>{item.context}</strong>
                    <div>
                      <p>{item.description}</p>
                      {item.reminderLabel ? <small>{item.reminderLabel}</small> : null}
                      {sourceRecord ? (
                        <div className="reminder-controls">
                          <select
                            aria-label="แก้เวลาเตือน"
                            value={sourceRecord.reminder?.offsetMinutes ?? ""}
                            onChange={(event) =>
                              updateRecord(
                                editReminder(sourceRecord, {
                                  offsetMinutes: Number(
                                    event.target.value,
                                  ) as ReminderOffsetMinutes,
                                  label: reminderLabel(
                                    Number(event.target.value) as ReminderOffsetMinutes,
                                  ),
                                }),
                              )
                            }
                          >
                            <option value="" disabled>
                              เลือกเวลาเตือน
                            </option>
                            {reminderOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {sourceRecord.reminder ? (
                            <button
                              className="ghost-button"
                              type="button"
                              onClick={() => updateRecord(removeReminder(sourceRecord))}
                            >
                              เอาเตือนออก
                            </button>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="finance-panel" id="finance" aria-labelledby="finance-title">
          <div className="panel-header">
            <p className="soft-label">บัญชีชีวิตแบบเบา ๆ</p>
            <h2 id="finance-title">การเงิน</h2>
            <p>สรุปจากรายการที่คุณยืนยันแล้ว ยังไม่ใช่ระบบบัญชีเต็มรูปแบบ</p>
          </div>
          <div className="finance-totals">
            <article>
              <span>รายรับ</span>
              <strong>{formatThaiBaht(totals.income)}</strong>
            </article>
            <article>
              <span>รายจ่าย</span>
              <strong>{formatThaiBaht(totals.expense)}</strong>
            </article>
            <article>
              <span>คงเหลือสุทธิ</span>
              <strong>{formatThaiBaht(totals.net)}</strong>
            </article>
          </div>
          {ledger.length === 0 ? (
            <p className="empty-state">ยังไม่มีรายการการเงินที่ยืนยันแล้ว</p>
          ) : (
            <div className="ledger-list">
              {ledger.map((entry) => (
                <article className={`ledger-card ${entry.direction}`} key={entry.id}>
                  <span>{entry.direction === "income" ? "รายรับ" : "รายจ่าย"}</span>
                  <strong>{formatThaiBaht(entry.amount)}</strong>
                  <p>{entry.description}</p>
                  <small>
                    {dateTextLabel(entry.dateText)}
                    {entry.context ? ` • ${entry.context}` : ""}
                  </small>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="settings-panel" id="settings" aria-labelledby="settings-title">
          <div className="panel-header">
            <p className="soft-label">ปรับให้เป็นพื้นที่ของคุณ</p>
            <h2 id="settings-title">ธีม</h2>
            <p>ธีมเป็นแค่หน้าตา ไม่เปลี่ยนความหมายของข้อมูล</p>
          </div>
          <div className="theme-controls">
            <button type="button" onClick={() => applyTheme(selectThemePreset("budgie"))}>
              Budgie
            </button>
            <button type="button" onClick={() => applyTheme(selectThemePreset("orchid"))}>
              Orchid
            </button>
            <button type="button" onClick={() => applyTheme(resetThemeToBudgie())}>
              กลับค่า Budgie
            </button>
          </div>
          <div className="color-controls">
            <ThemeColor
              label="สีหลัก"
              value={theme.tokens.primaryAccent}
              onChange={(value) => applyTheme(customizeTheme(theme, { primaryAccent: value }))}
            />
            <ThemeColor
              label="สีรอง"
              value={theme.tokens.secondaryAccent}
              onChange={(value) => applyTheme(customizeTheme(theme, { secondaryAccent: value }))}
            />
            <ThemeColor
              label="สีไฮไลต์"
              value={theme.tokens.highlightAccent}
              onChange={(value) => applyTheme(customizeTheme(theme, { highlightAccent: value }))}
            />
          </div>
        </section>

        <section className="data-panel" id="data" aria-labelledby="data-title">
          <div className="panel-header">
            <p className="soft-label">ข้อมูลของฉัน</p>
            <h2 id="data-title">ความจำของ JenOS ในเครื่องนี้</h2>
            <p>
              ข้อมูลเก็บใน browser/device นี้ ไม่มี cloud sync การล้าง browser storage
              อาจทำให้ข้อมูลหาย Backup ไว้จะปลอดภัยกว่า
            </p>
          </div>
          <div className="data-actions">
            <button type="button" onClick={handleExport}>
              สำรองข้อมูล
            </button>
            <button type="button" onClick={() => fileInputRef.current?.click()}>
              กู้คืนข้อมูล
            </button>
            <button className="ghost-button" type="button" onClick={clearLocalData}>
              ล้างข้อมูลในเครื่องนี้
            </button>
          </div>
          <input
            ref={fileInputRef}
            hidden
            type="file"
            accept="application/json"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void handleRestoreFile(file);
            }}
          />
          {restorePreview ? (
            <div className="restore-preview">
              <p>
                ไฟล์นี้มีรายการ {restorePreview.routedCount} รายการ และธีม{" "}
                {restorePreview.themeName}
              </p>
              <button type="button" onClick={() => void confirmRestore()}>
                ยืนยันแทนที่ข้อมูลในเครื่องนี้
              </button>
            </div>
          ) : null}
        </section>
      </section>

      <details className="technical-details">
        <summary>ข้อมูลระบบสำหรับตรวจสอบ</summary>
        <dl className="status-strip" aria-label="Technical status">
          <div>
            <dt>Env</dt>
            <dd>{environment.name}</dd>
          </div>
          <div>
            <dt>Version</dt>
            <dd>{environment.version}</dd>
          </div>
          <div>
            <dt>Storage</dt>
            <dd>{health.storage}</dd>
          </div>
          <div>
            <dt>AI</dt>
            <dd>{health.ai}</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>{health.backend}</dd>
          </div>
        </dl>
      </details>
    </main>
  );
}

function ThemeColor(props: {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
}) {
  return (
    <label>
      {props.label}
      <input
        type="color"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
}

function reminderLabel(offset: ReminderOffsetMinutes): string {
  const option = reminderOptions.find((item) => item.value === offset);
  return offset === 0 ? "เตือนเมื่อถึงเวลา" : `เตือน${option?.label ?? ""}`;
}

function familyIcon(family: RouteFamily): string {
  switch (family) {
    case "schedule":
      return "📅";
    case "action":
      return "✓";
    case "relationship":
      return "🔗";
    case "project":
      return "◉";
    case "dependency":
      return "⏳";
    case "finance":
      return "฿";
    case "personal-care":
      return "💜";
    case "instruction":
      return "↘";
    case "context":
      return "⌁";
    case "information":
      return "◇";
  }
}

function authorityLabel(authority: RouteAuthority): string {
  switch (authority) {
    case "auto-route-candidate":
      return "บันทึกได้ ถ้าคุณไม่แก้";
    case "confirm-required":
      return "ขอยืนยันก่อน";
    case "clarification-required":
      return "ต้องเติมบริบท";
    case "owner-only":
      return "คุณต้องตัดสินใจ";
  }
}

function acceptLabel(authority: RouteAuthority): string {
  switch (authority) {
    case "auto-route-candidate":
      return "บันทึกอันนี้";
    case "confirm-required":
      return "ยืนยัน";
    case "clarification-required":
      return "รับไว้แบบยังไม่ผูกบริบท";
    case "owner-only":
      return "ยืนยันการสร้าง";
  }
}

function contextLabel(contextStatus: RouteCandidate["contextStatus"]): string {
  switch (contextStatus) {
    case "resolved":
      return "บริบทชัด";
    case "unresolved":
      return "บริบทยังไม่ชัด";
    case "not-needed":
      return "ไม่ต้องผูกบริบท";
  }
}

function dateTextLabel(dateText: string): string {
  switch (dateText) {
    case "today":
      return "วันนี้";
    case "yesterday":
      return "เมื่อวาน";
    case "tomorrow":
      return "พรุ่งนี้";
    default:
      return "ไม่ระบุวัน";
  }
}
