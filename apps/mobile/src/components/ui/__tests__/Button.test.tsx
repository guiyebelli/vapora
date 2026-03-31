import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Button } from '../Button';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('Button', () => {
  it('renders with title', () => {
    renderWithTheme(<Button title="Guardar" onPress={jest.fn()} />);
    expect(screen.getByText('Guardar')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    renderWithTheme(<Button title="Guardar" onPress={onPress} />);
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPress = jest.fn();
    renderWithTheme(<Button title="Guardar" onPress={onPress} disabled />);
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('shows loading indicator when loading', () => {
    renderWithTheme(<Button title="Guardar" onPress={jest.fn()} loading />);
    // When loading, the title text should not be visible
    expect(screen.queryByText('Guardar')).toBeNull();
  });

  it('has accessibility role button', () => {
    renderWithTheme(<Button title="Guardar" onPress={jest.fn()} />);
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders all variants without crashing', () => {
    const variants = ['primary', 'secondary', 'ghost', 'danger'] as const;
    variants.forEach((variant) => {
      const { unmount } = renderWithTheme(
        <Button title={variant} onPress={jest.fn()} variant={variant} />,
      );
      expect(screen.getByText(variant)).toBeTruthy();
      unmount();
    });
  });
});
