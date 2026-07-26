import { describe, expect, it } from "vitest";
import {
  budgieTheme,
  customizeTheme,
  resetThemeToBudgie,
  themeToCssVariables,
} from "../theme-system";

describe("theme system", () => {
  it("uses Budgie as the default theme", () => {
    expect(budgieTheme.preset).toBe("budgie");
    expect(budgieTheme.tokens.primaryAccent).toBe("#4dc8df");
  });

  it("custom accent changes presentation tokens only", () => {
    const custom = customizeTheme(budgieTheme, { primaryAccent: "#6ee7f8" });

    expect(custom.preset).toBe("custom");
    expect(themeToCssVariables(custom)["--owner-primary"]).toBe("#6ee7f8");
  });

  it("reset restores Budgie", () => {
    const custom = customizeTheme(budgieTheme, { highlightAccent: "#c4ff75" });

    expect(custom.preset).toBe("custom");
    expect(resetThemeToBudgie()).toEqual(budgieTheme);
  });

  it("theme changes do not mutate routed or domain data", () => {
    const routedLikeData = { family: "finance", amount: 420 };
    const before = structuredClone(routedLikeData);

    customizeTheme(budgieTheme, { secondaryAccent: "#b8a4ff" });

    expect(routedLikeData).toEqual(before);
  });
});
