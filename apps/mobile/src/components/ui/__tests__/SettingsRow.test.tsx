import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { SettingsRow, SettingsGroup, SectionLabel } from '../SettingsRow';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('SettingsRow', () => {
  it('renders icon, label and value', () => {
    renderWithTheme(
      <SettingsRow icon="🌐" label="Language" value="EN" onPress={jest.fn()} />,
    );
    expect(screen.getByText('🌐')).toBeTruthy();
    expect(screen.getByText('Language')).toBeTruthy();
    expect(screen.getByText('EN')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    renderWithTheme(
      <SettingsRow icon="🌐" label="Language" onPress={onPress} />,
    );
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('has combined accessibility label with value', () => {
    renderWithTheme(
      <SettingsRow icon="🌐" label="Language" value="EN" onPress={jest.fn()} />,
    );
    expect(screen.getByLabelText('Language, EN')).toBeTruthy();
  });

  it('has label-only accessibility label without value', () => {
    renderWithTheme(
      <SettingsRow icon="ℹ️" label="About" onPress={jest.fn()} />,
    );
    expect(screen.getByLabelText('About')).toBeTruthy();
  });
});

describe('SettingsGroup', () => {
  it('renders children', () => {
    renderWithTheme(
      <SettingsGroup>
        <SettingsRow icon="🌐" label="Language" onPress={jest.fn()} />
        <SettingsRow icon="🎨" label="Theme" onPress={jest.fn()} />
      </SettingsGroup>,
    );
    expect(screen.getByText('Language')).toBeTruthy();
    expect(screen.getByText('Theme')).toBeTruthy();
  });
});

describe('SectionLabel', () => {
  it('renders uppercased label', () => {
    renderWithTheme(<SectionLabel label="preferences" />);
    expect(screen.getByText('PREFERENCES')).toBeTruthy();
  });

  it('has header accessibility role', () => {
    renderWithTheme(<SectionLabel label="info" />);
    expect(screen.getByRole('header')).toBeTruthy();
  });
});
