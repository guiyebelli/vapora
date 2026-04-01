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
  glass: {
    background: 'rgba(255, 255, 255, 0.65)',
    border: 'rgba(255, 255, 255, 0.5)',
    card: 'rgba(245, 245, 244, 0.7)',
    input: 'rgba(250, 250, 249, 0.8)',
    overlay: 'rgba(255, 255, 255, 0.3)',
  },
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
    tertiary: colors.neutral[400],
    inverse: colors.neutral[900],
  },
  border: colors.neutral[700],
  accent: colors.primary[400],
  accentLight: colors.primary[900],
  glass: {
    background: 'rgba(28, 25, 23, 0.65)',
    border: 'rgba(255, 255, 255, 0.1)',
    card: 'rgba(41, 37, 36, 0.7)',
    input: 'rgba(41, 37, 36, 0.8)',
    overlay: 'rgba(255, 255, 255, 0.05)',
  },
} as const;

export type Theme = {
  background: { primary: string; secondary: string; card: string };
  text: { primary: string; secondary: string; tertiary: string; inverse: string };
  border: string;
  accent: string;
  accentLight: string;
  glass: {
    background: string;
    border: string;
    card: string;
    input: string;
    overlay: string;
  };
};
