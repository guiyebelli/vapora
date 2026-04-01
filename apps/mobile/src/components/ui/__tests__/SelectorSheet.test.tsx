import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { SelectorSheet } from '../SelectorSheet';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B', icon: '🌍' },
  { value: 'c', label: 'Option C' },
];

describe('SelectorSheet', () => {
  it('renders title and options when visible', () => {
    renderWithTheme(
      <SelectorSheet visible title="Pick one" options={options} selected="a" onSelect={jest.fn()} onClose={jest.fn()} />,
    );
    expect(screen.getByText('Pick one')).toBeTruthy();
    expect(screen.getByText('Option A')).toBeTruthy();
    expect(screen.getByText('Option B')).toBeTruthy();
    expect(screen.getByText('Option C')).toBeTruthy();
  });

  it('renders subtitle when provided', () => {
    renderWithTheme(
      <SelectorSheet visible title="Pick" subtitle="Choose wisely" options={options} selected="a" onSelect={jest.fn()} onClose={jest.fn()} />,
    );
    expect(screen.getByText('Choose wisely')).toBeTruthy();
  });

  it('calls onSelect and onClose when option is pressed', () => {
    const onSelect = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(
      <SelectorSheet visible title="Pick" options={options} selected="a" onSelect={onSelect} onClose={onClose} />,
    );
    fireEvent.press(screen.getByText('Option B'));
    expect(onSelect).toHaveBeenCalledWith('b');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('uses radio accessibility role', () => {
    renderWithTheme(
      <SelectorSheet visible title="Pick" options={options} selected="a" onSelect={jest.fn()} onClose={jest.fn()} />,
    );
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBe(3);
  });

  it('renders option icon when provided', () => {
    renderWithTheme(
      <SelectorSheet visible title="Pick" options={options} selected="a" onSelect={jest.fn()} onClose={jest.fn()} />,
    );
    expect(screen.getByText('🌍')).toBeTruthy();
  });
});
