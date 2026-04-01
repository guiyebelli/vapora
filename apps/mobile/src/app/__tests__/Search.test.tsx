import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SearchScreen from '../search';
import { ThemeProvider } from '@/theme';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useSearchStore } from '@/store/useSearchStore';
import { mockRecipes } from './fixtures';

jest.mock('@/store/useRecipeStore');
jest.mock('@/store/useFavoritesStore');
jest.mock('@/store/useSearchStore');

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

beforeEach(() => {
  jest.clearAllMocks();
  (useRecipeStore as unknown as jest.Mock).mockImplementation((selector) => {
    const state = { recipes: mockRecipes };
    return selector ? selector(state) : state;
  });
  (useFavoritesStore as unknown as jest.Mock).mockImplementation((selector) => {
    const state = {
      favoriteIds: [],
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    };
    return selector ? selector(state) : state;
  });
  (useSearchStore as unknown as jest.Mock).mockImplementation((selector) => {
    const state = {
      recentSearches: ['sopa', 'pan'],
      addRecent: jest.fn(),
      removeRecent: jest.fn(),
    };
    return selector ? selector(state) : state;
  });
});

describe('Search Screen', () => {
  it('renders search input', () => {
    renderWithTheme(<SearchScreen />);
    expect(screen.getByLabelText('search.placeholder')).toBeTruthy();
  });

  it('renders cancel button', () => {
    renderWithTheme(<SearchScreen />);
    expect(screen.getByText('search.cancel')).toBeTruthy();
  });

  it('renders filter toggle button', () => {
    renderWithTheme(<SearchScreen />);
    expect(screen.getByText('search.filters')).toBeTruthy();
  });

  it('renders recent searches', () => {
    renderWithTheme(<SearchScreen />);
    expect(screen.getByText('sopa')).toBeTruthy();
    expect(screen.getByText('pan')).toBeTruthy();
  });
});
