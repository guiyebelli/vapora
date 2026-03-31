import { useFavoritesStore } from '../useFavoritesStore';

beforeEach(() => {
  useFavoritesStore.setState({ favoriteIds: [] });
});

describe('useFavoritesStore', () => {
  it('should start with empty favorites', () => {
    const { favoriteIds } = useFavoritesStore.getState();
    expect(favoriteIds).toEqual([]);
  });

  it('should add a favorite', () => {
    useFavoritesStore.getState().addFavorite('rec_001');
    expect(useFavoritesStore.getState().favoriteIds).toEqual(['rec_001']);
  });

  it('should not duplicate a favorite', () => {
    const { addFavorite } = useFavoritesStore.getState();
    addFavorite('rec_001');
    addFavorite('rec_001');
    expect(useFavoritesStore.getState().favoriteIds).toEqual(['rec_001']);
  });

  it('should add multiple favorites', () => {
    const { addFavorite } = useFavoritesStore.getState();
    addFavorite('rec_001');
    addFavorite('rec_002');
    addFavorite('rec_003');
    expect(useFavoritesStore.getState().favoriteIds).toEqual([
      'rec_001',
      'rec_002',
      'rec_003',
    ]);
  });

  it('should remove a favorite', () => {
    useFavoritesStore.setState({ favoriteIds: ['rec_001', 'rec_002'] });
    useFavoritesStore.getState().removeFavorite('rec_001');
    expect(useFavoritesStore.getState().favoriteIds).toEqual(['rec_002']);
  });

  it('should not fail removing a non-existent favorite', () => {
    useFavoritesStore.setState({ favoriteIds: ['rec_001'] });
    useFavoritesStore.getState().removeFavorite('rec_999');
    expect(useFavoritesStore.getState().favoriteIds).toEqual(['rec_001']);
  });

  it('should check isFavorite correctly', () => {
    useFavoritesStore.setState({ favoriteIds: ['rec_001', 'rec_002'] });
    const { isFavorite } = useFavoritesStore.getState();
    expect(isFavorite('rec_001')).toBe(true);
    expect(isFavorite('rec_002')).toBe(true);
    expect(isFavorite('rec_999')).toBe(false);
  });
});
