import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Chip } from '../Chip';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('Chip', () => {
  it('renders label', () => {
    renderWithTheme(<Chip label="Postres" />);
    expect(screen.getByText('Postres')).toBeTruthy();
  });

  it('renders icon when provided', () => {
    renderWithTheme(<Chip label="Postres" icon="🍰" />);
    expect(screen.getByText('🍰')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    renderWithTheme(<Chip label="Postres" onPress={onPress} />);
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders all variants without crashing', () => {
    const variants = ['default', 'selected', 'category'] as const;
    variants.forEach((variant) => {
      const { unmount } = renderWithTheme(
        <Chip label={variant} variant={variant} />,
      );
      expect(screen.getByText(variant)).toBeTruthy();
      unmount();
    });
  });

  it('resolves to selected when default + selected=true', () => {
    renderWithTheme(<Chip label="Active" selected />);
    expect(screen.getByText('Active')).toBeTruthy();
  });
});
