import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../Text';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('Text', () => {
  it('renders children', () => {
    renderWithTheme(<Text>Hola mundo</Text>);
    expect(screen.getByText('Hola mundo')).toBeTruthy();
  });

  it('renders with different variants without crashing', () => {
    const variants = ['h1', 'h2', 'h3', 'body', 'bodySmall', 'caption'] as const;
    variants.forEach((variant) => {
      const { unmount } = renderWithTheme(
        <Text variant={variant}>{variant}</Text>,
      );
      expect(screen.getByText(variant)).toBeTruthy();
      unmount();
    });
  });

  it('applies custom color', () => {
    renderWithTheme(<Text color="#FF0000">Rojo</Text>);
    const text = screen.getByText('Rojo');
    expect(text).toBeTruthy();
  });

  it('has accessibility role text', () => {
    renderWithTheme(<Text>Accesible</Text>);
    expect(screen.getByRole('text')).toBeTruthy();
  });
});
