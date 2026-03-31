import { colors } from './colors';

export const lightTheme = {
  background: {
    primary: colors.neutral[0],
    secondary: colors.neutral[50],
    card: colors.neutral[100],
  },
  text: {
    primary: colors.neutral[800],
    secondary: colors.neutral[500],
    tertiary: colors.neutral[400],
    inverse: colors.neutral[0],
  },
  border: colors.neutral[200],
  accent: colors.primary[500],
  accentLight: colors.primary[50],
} as const;

export const darkTheme = {
  background: {
    primary: colors.neutral[900],
    secondary: colors.neutral[800],
    card: colors.neutral[800],
  },
  text: {
    primary: colors.neutral[50],
    secondary: colors.neutral[400],
    tertiary: colors.neutral[500],
    inverse: colors.neutral[900],
  },
  border: colors.neutral[700],
  accent: colors.primary[400],
  accentLight: colors.primary[900],
} as const;

export type Theme = {
  background: { primary: string; secondary: string; card: string };
  text: { primary: string; secondary: string; tertiary: string; inverse: string };
  border: string;
  accent: string;
  accentLight: string;
};
