import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FavoritesScreen from '../(tabs)/favorites';
import { ThemeProvider } from '@/theme';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { mockRecipes } from './fixtures';

jest.mock('@/store/useRecipeStore');
jest.mock('@/store/useFavoritesStore');

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('Favorites Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useRecipeStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = { recipes: mockRecipes };
      return selector ? selector(state) : state;
    });
  });

  it('renders empty state when no favorites', () => {
    (useFavoritesStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        favoriteIds: [],
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
      };
      return selector ? selector(state) : state;
    });
    renderWithTheme(<FavoritesScreen />);
    expect(screen.getByText('favorites.empty')).toBeTruthy();
  });

  it('renders favorite recipes when present', () => {
    (useFavoritesStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        favoriteIds: ['rec_001', 'rec_002'],
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
      };
      return selector ? selector(state) : state;
    });
    renderWithTheme(<FavoritesScreen />);
    expect(screen.getByText('favorites.title')).toBeTruthy();
    expect(screen.getByText('Sopa de test')).toBeTruthy();
    expect(screen.getByText('Pan de test')).toBeTruthy();
  });

  it('renders title header', () => {
    (useFavoritesStore as unknown as jest.Mock).mockImplementation((selector) => {
      const state = {
        favoriteIds: ['rec_001'],
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
      };
      return selector ? selector(state) : state;
    });
    renderWithTheme(<FavoritesScreen />);
    expect(screen.getByText('favorites.title')).toBeTruthy();
  });
});
