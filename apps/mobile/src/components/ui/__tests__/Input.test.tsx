import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Input } from '../Input';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('Input', () => {
  it('renders placeholder', () => {
    renderWithTheme(<Input placeholder="Buscar..." />);
    expect(screen.getByPlaceholderText('Buscar...')).toBeTruthy();
  });

  it('calls onChangeText', () => {
    const onChangeText = jest.fn();
    renderWithTheme(<Input placeholder="Buscar..." onChangeText={onChangeText} />);
    fireEvent.changeText(screen.getByPlaceholderText('Buscar...'), 'risotto');
    expect(onChangeText).toHaveBeenCalledWith('risotto');
  });

  it('shows clear button when value is present and onClear provided', () => {
    const onClear = jest.fn();
    renderWithTheme(
      <Input placeholder="Buscar..." value="test" onClear={onClear} />,
    );
    fireEvent.press(screen.getByLabelText('Limpiar'));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('does not show clear button when value is empty', () => {
    renderWithTheme(
      <Input placeholder="Buscar..." value="" onClear={jest.fn()} />,
    );
    expect(screen.queryByLabelText('Limpiar')).toBeNull();
  });
});
