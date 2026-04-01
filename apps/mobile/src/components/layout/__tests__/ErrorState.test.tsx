import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ErrorState } from '../ErrorState';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('ErrorState', () => {
  it('renders error message', () => {
    renderWithTheme(
      <ErrorState message="Something went wrong" onRetry={jest.fn()} />,
    );
    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });

  it('renders retry button with i18n label', () => {
    renderWithTheme(
      <ErrorState message="Error" onRetry={jest.fn()} />,
    );
    expect(screen.getByText('common.retry')).toBeTruthy();
  });

  it('calls onRetry when button is pressed', () => {
    const onRetry = jest.fn();
    renderWithTheme(
      <ErrorState message="Error" onRetry={onRetry} />,
    );
    fireEvent.press(screen.getByRole('button'));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('renders default emoji icon when no illustration', () => {
    renderWithTheme(
      <ErrorState message="Error" onRetry={jest.fn()} />,
    );
    expect(screen.getByText('⚠️')).toBeTruthy();
  });
});
