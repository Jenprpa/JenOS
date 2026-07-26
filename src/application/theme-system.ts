export type ThemePresetId = "budgie" | "orchid" | "custom";

export interface ThemeTokens {
  readonly primaryAccent: string;
  readonly secondaryAccent: string;
  readonly highlightAccent: string;
}

export interface OwnerTheme {
  readonly preset: ThemePresetId;
  readonly tokens: ThemeTokens;
}

export const budgieTheme: OwnerTheme = {
  preset: "budgie",
  tokens: {
    primaryAccent: "#4dc8df",
    secondaryAccent: "#8d7af7",
    highlightAccent: "#a9e86f",
  },
};

export const orchidTheme: OwnerTheme = {
  preset: "orchid",
  tokens: {
    primaryAccent: "#8d7af7",
    secondaryAccent: "#d86c9f",
    highlightAccent: "#4dc8df",
  },
};

export const themePresets: readonly OwnerTheme[] = [budgieTheme, orchidTheme];

export function selectThemePreset(preset: Exclude<ThemePresetId, "custom">): OwnerTheme {
  return preset === "budgie" ? budgieTheme : orchidTheme;
}

export function customizeTheme(current: OwnerTheme, tokens: Partial<ThemeTokens>): OwnerTheme {
  return {
    preset: "custom",
    tokens: {
      ...current.tokens,
      ...tokens,
    },
  };
}

export function resetThemeToBudgie(): OwnerTheme {
  return budgieTheme;
}

export function themeToCssVariables(theme: OwnerTheme): Record<string, string> {
  return {
    "--owner-primary": theme.tokens.primaryAccent,
    "--owner-secondary": theme.tokens.secondaryAccent,
    "--owner-highlight": theme.tokens.highlightAccent,
  };
}
