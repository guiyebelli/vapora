import { create } from 'zustand';
import type { Recipe } from '@/types';
import { recipes as seedRecipes } from '@/data';

interface RecipeState {
  recipes: Recipe[];
  isLoading: boolean;
  setRecipes: (recipes: Recipe[]) => void;
  setLoading: (loading: boolean) => void;
  getRecipeById: (id: string) => Recipe | undefined;
}

export const useRecipeStore = create<RecipeState>()((set, get) => ({
  recipes: seedRecipes,
  isLoading: false,
  setRecipes: (recipes) => set({ recipes }),
  setLoading: (isLoading) => set({ isLoading }),
  getRecipeById: (id) => get().recipes.find((r) => r.id === id),
}));
