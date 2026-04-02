import { useRecipeStore } from '../useRecipeStore';

describe('useRecipeStore', () => {
  it('should have seed recipes loaded', () => {
    const { recipes } = useRecipeStore.getState();
    expect(recipes.length).toBe(32);
  });

  it('should get recipe by valid id', () => {
    const { getRecipeById } = useRecipeStore.getState();
    const recipe = getRecipeById('rec_001');
    expect(recipe).toBeDefined();
    expect(recipe?.id).toBe('rec_001');
  });

  it('should return undefined for invalid id', () => {
    const { getRecipeById } = useRecipeStore.getState();
    expect(getRecipeById('nonexistent')).toBeUndefined();
  });

  it('should have recipes with required fields', () => {
    const { recipes } = useRecipeStore.getState();
    recipes.forEach((recipe) => {
      expect(recipe.id).toBeTruthy();
      expect(recipe.title.es).toBeTruthy();
      expect(recipe.title.en).toBeTruthy();
      expect(recipe.category).toBeTruthy();
      expect(recipe.ingredients.length).toBeGreaterThan(0);
      expect(recipe.steps.length).toBeGreaterThan(0);
      expect(['easy', 'medium', 'hard']).toContain(recipe.difficulty);
      expect(recipe.totalTime).toBeGreaterThan(0);
      expect(recipe.servings).toBeGreaterThan(0);
    });
  });

  it('should cover all 8 categories', () => {
    const { recipes } = useRecipeStore.getState();
    const categories = new Set(recipes.map((r) => r.category));
    expect(categories.size).toBe(8);
  });
});
