# Capacity-Aware Recommendations V1

## Purpose

Capacity-aware recommendations combine:

```text
Reality
→ Human Capacity
→ Commitment
→ Consequences
→ Recommendation
```

The goal is to help the owner continue sustainably.

## Recommendation Rules

V1 recommendations are evidence-based and conservative.

Examples:

- Low capacity + urgent deadline: suggest bounded urgent work first.
- Low capacity + no urgent deadline: suggest defer, reduce scope, or lighter work.
- Good capacity + overloaded calendar: suggest keeping buffer.
- Unknown capacity + urgent task: mention that capacity evidence is missing.

## Reasoning Visibility

Every recommendation should show evidence.

JenOS should say why it is suggesting something, for example:

- "คุณบันทึกว่า วันนี้พลังงานต่ำ"
- "มีเรื่องผูกกับกำหนดเวลา"
- "ยังไม่มีข้อมูล Human Capacity ที่ยืนยันแล้ว"

## Limits

JenOS must not:

- Mutate owner-controlled truth.
- Mark a Project failed.
- Stop a Project.
- Cancel a commitment.
- Claim certainty beyond evidence.
- Present advice as medical guidance.

## Confidence

Confidence must be proportional to evidence.

V1 uses low or medium confidence only.

