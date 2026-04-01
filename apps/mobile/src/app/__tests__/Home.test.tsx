import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import HomeScreen from '../(tabs)/index';
import { ThemeProvider } from '@/theme';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { mockRecipes } from './fixtures';

jest.mock('@/store/useRecipeStore');
jest.mock('@/store/useFavoritesStore');

const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ push: mockPush, back: jest.fn(), replace: jest.fn() }),
  useLocalSearchParams: () => ({}),
  router: { push: jest.fn(), back: jest.fn(), replace: jest.fn() },
  Link: 'Link',
  Tabs: 'Tabs',
  Stack: 'Stack',
}));

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

const mockAddFavorite = jest.fn();
const mockRemoveFavorite = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  (useRecipeStore as unknown as jest.Mock).mockImplementation((selector) => {
    const state = { recipes: mockRecipes };
    return selector ? selector(state) : state;
  });
  (useFavoritesStore as unknown as jest.Mock).mockImplementation((selector) => {
    const state = {
      favoriteIds: ['rec_001'],
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
    };
    return selector ? selector(state) : state;
  });
});

describe('Home Screen', () => {
  it('renders Vapora header', () => {
    renderWithTheme(<HomeScreen />);
    expect(screen.getByText('Vapora')).toBeTruthy();
  });

  it('renders category chips', () => {
    renderWithTheme(<HomeScreen />);
    expect(screen.getByText('Postres')).toBeTruthy();
    expect(screen.getByText('Sopas')).toBeTruthy();
  });

  it('renders recipe cards', () => {
    renderWithTheme(<HomeScreen />);
    expect(screen.getByText('Sopa de test')).toBeTruthy();
    expect(screen.getByText('Pan de test')).toBeTruthy();
  });

  it('navigates to search when search bar is pressed', () => {
    renderWithTheme(<HomeScreen />);
    fireEvent.press(screen.getAllByLabelText('common.search')[0]);
    expect(mockPush).toHaveBeenCalledWith('/search');
  });

  it('renders section headers', () => {
    renderWithTheme(<HomeScreen />);
    expect(screen.getByText('home.categories')).toBeTruthy();
    expect(screen.getByText('home.featured')).toBeTruthy();
  });
});
