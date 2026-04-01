import React from 'react';
import { render } from '@testing-library/react-native';
import { Skeleton } from '../Skeleton';
import { ThemeProvider } from '@/theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const { toJSON } = renderWithTheme(<Skeleton width={200} height={20} />);
    expect(toJSON()).toBeTruthy();
  });

  it('renders with percentage dimensions', () => {
    const { toJSON } = renderWithTheme(<Skeleton width="100%" height={16} />);
    expect(toJSON()).toBeTruthy();
  });

  it('accepts custom radius', () => {
    const { toJSON } = renderWithTheme(<Skeleton width={48} height={48} radius={24} />);
    expect(toJSON()).toBeTruthy();
  });
});
