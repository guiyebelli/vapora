import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { EmptyState } from '../../layout/EmptyState';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('EmptyState', () => {
  it('renders icon, title and message', () => {
    renderWithTheme(
      <EmptyState icon="💛" title="Sin favoritos" message="Aún no guardaste recetas" />,
    );
    expect(screen.getByText('💛')).toBeTruthy();
    expect(screen.getByText('Sin favoritos')).toBeTruthy();
    expect(screen.getByText('Aún no guardaste recetas')).toBeTruthy();
  });

  it('renders action button when provided', () => {
    const onAction = jest.fn();
    renderWithTheme(
      <EmptyState
        icon="💛"
        title="Sin favoritos"
        message="Aún no guardaste recetas"
        actionLabel="Explorar"
        onAction={onAction}
      />,
    );
    fireEvent.press(screen.getByText('Explorar'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('does not render button when no action', () => {
    renderWithTheme(
      <EmptyState icon="💛" title="Sin favoritos" message="Mensaje" />,
    );
    expect(screen.queryByRole('button')).toBeNull();
  });
});
