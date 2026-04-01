import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { SectionHeader } from '../SectionHeader';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('SectionHeader', () => {
  it('renders title', () => {
    renderWithTheme(<SectionHeader title="Featured" />);
    expect(screen.getByText('Featured')).toBeTruthy();
  });

  it('renders action button when provided', () => {
    renderWithTheme(
      <SectionHeader title="Featured" actionLabel="See all" onAction={jest.fn()} />,
    );
    expect(screen.getByText('See all')).toBeTruthy();
  });

  it('calls onAction when action is pressed', () => {
    const onAction = jest.fn();
    renderWithTheme(
      <SectionHeader title="Featured" actionLabel="See all" onAction={onAction} />,
    );
    fireEvent.press(screen.getByLabelText('See all'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('does not render action button without actionLabel', () => {
    renderWithTheme(<SectionHeader title="Featured" />);
    expect(screen.queryByRole('button')).toBeNull();
  });
});
