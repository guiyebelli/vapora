import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { RecipeCard } from '../RecipeCard';
import { ThemeProvider } from '@/theme';
import type { Recipe } from '@/types';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

const mockRecipe: Recipe = {
  id: 'rec_test',
  slug: 'test-recipe',
  title: { es: 'Receta de prueba', en: 'Test Recipe' },
  description: { es: 'Descripción', en: 'Description' },
  image: '',
  category: 'soups',
  tags: ['quick'],
  difficulty: 'easy',
  totalTime: 30,
  prepTime: 10,
  cookTime: 20,
  servings: 4,
  thermomixModel: ['TM5', 'TM6'],
  accessories: [],
  ingredients: [],
  steps: [],
  createdAt: '2026-01-01',
  updatedAt: '2026-01-01',
};

describe('RecipeCard', () => {
  it('renders recipe title', () => {
    renderWithTheme(
      <RecipeCard recipe={mockRecipe} onPress={jest.fn()} onFavoritePress={jest.fn()} isFavorite={false} />,
    );
    expect(screen.getByText('Receta de prueba')).toBeTruthy();
  });

  it('renders time and difficulty', () => {
    renderWithTheme(
      <RecipeCard recipe={mockRecipe} onPress={jest.fn()} onFavoritePress={jest.fn()} isFavorite={false} />,
    );
    expect(screen.getByText(/30 min/)).toBeTruthy();
  });

  it('calls onPress when card is pressed', () => {
    const onPress = jest.fn();
    renderWithTheme(
      <RecipeCard recipe={mockRecipe} onPress={onPress} onFavoritePress={jest.fn()} isFavorite={false} />,
    );
    fireEvent.press(screen.getByLabelText('Receta de prueba'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onFavoritePress when favorite button is pressed', () => {
    const onFavoritePress = jest.fn();
    renderWithTheme(
      <RecipeCard recipe={mockRecipe} onPress={jest.fn()} onFavoritePress={onFavoritePress} isFavorite={false} />,
    );
    fireEvent.press(screen.getByLabelText('recipe.addFavorite'));
    expect(onFavoritePress).toHaveBeenCalledTimes(1);
  });

  it('shows correct favorite label when favorited', () => {
    renderWithTheme(
      <RecipeCard recipe={mockRecipe} onPress={jest.fn()} onFavoritePress={jest.fn()} isFavorite={true} />,
    );
    expect(screen.getByLabelText('recipe.removeFavorite')).toBeTruthy();
  });

  it('has accessibility role button on card and favorite', () => {
    renderWithTheme(
      <RecipeCard recipe={mockRecipe} onPress={jest.fn()} onFavoritePress={jest.fn()} isFavorite={false} />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
});
