import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import SettingsScreen from '../(tabs)/settings';
import { ThemeProvider } from '@/theme';
import { useSettingsStore } from '@/store/useSettingsStore';

jest.mock('@/store/useSettingsStore');

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

const mockSetLanguage = jest.fn();
const mockSetTMModel = jest.fn();
const mockSetTheme = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  (useSettingsStore as unknown as jest.Mock).mockImplementation((selector) => {
    const state = {
      language: 'es' as const,
      tmModel: 'both' as const,
      theme: 'light' as const,
      setLanguage: mockSetLanguage,
      setTMModel: mockSetTMModel,
      setTheme: mockSetTheme,
    };
    return selector ? selector(state) : state;
  });
});

describe('Settings Screen', () => {
  it('renders title', () => {
    renderWithTheme(<SettingsScreen />);
    expect(screen.getByText('settings.title')).toBeTruthy();
  });

  it('renders preferences section', () => {
    renderWithTheme(<SettingsScreen />);
    expect(screen.getByText('settings.language')).toBeTruthy();
    expect(screen.getByText('settings.thermomix')).toBeTruthy();
    expect(screen.getByText('settings.themeDark')).toBeTruthy();
  });

  it('renders info section', () => {
    renderWithTheme(<SettingsScreen />);
    expect(screen.getByText('settings.about')).toBeTruthy();
    expect(screen.getByText('settings.licenses')).toBeTruthy();
    expect(screen.getByText('settings.privacy')).toBeTruthy();
    expect(screen.getByText('settings.feedback')).toBeTruthy();
  });

  it('renders version in footer', () => {
    renderWithTheme(<SettingsScreen />);
    expect(screen.getByText('v1.0.0')).toBeTruthy();
  });

  it('displays current language', () => {
    renderWithTheme(<SettingsScreen />);
    expect(screen.getByText('ES')).toBeTruthy();
  });

  it('toggles dark mode via switch', () => {
    renderWithTheme(<SettingsScreen />);
    const toggle = screen.getByRole('switch');
    fireEvent(toggle, 'valueChange', true);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});
