import { useSearchStore } from '../useSearchStore';

beforeEach(() => {
  useSearchStore.setState({ recentSearches: [] });
});

describe('useSearchStore', () => {
  it('should start with empty history', () => {
    expect(useSearchStore.getState().recentSearches).toEqual([]);
  });

  it('should add a recent search', () => {
    useSearchStore.getState().addRecent('risotto');
    expect(useSearchStore.getState().recentSearches).toEqual(['risotto']);
  });

  it('should add to the beginning', () => {
    const { addRecent } = useSearchStore.getState();
    addRecent('risotto');
    addRecent('pan');
    expect(useSearchStore.getState().recentSearches).toEqual(['pan', 'risotto']);
  });

  it('should move duplicate to the beginning', () => {
    const { addRecent } = useSearchStore.getState();
    addRecent('risotto');
    addRecent('pan');
    addRecent('risotto');
    expect(useSearchStore.getState().recentSearches).toEqual(['risotto', 'pan']);
  });

  it('should keep maximum 10 items', () => {
    const { addRecent } = useSearchStore.getState();
    for (let i = 1; i <= 12; i++) {
      addRecent(`search_${i}`);
    }
    const { recentSearches } = useSearchStore.getState();
    expect(recentSearches).toHaveLength(10);
    expect(recentSearches[0]).toBe('search_12');
    expect(recentSearches[9]).toBe('search_3');
  });

  it('should ignore empty strings', () => {
    useSearchStore.getState().addRecent('');
    expect(useSearchStore.getState().recentSearches).toEqual([]);
  });

  it('should ignore whitespace-only strings', () => {
    useSearchStore.getState().addRecent('   ');
    expect(useSearchStore.getState().recentSearches).toEqual([]);
  });

  it('should trim whitespace', () => {
    useSearchStore.getState().addRecent('  risotto  ');
    expect(useSearchStore.getState().recentSearches).toEqual(['risotto']);
  });

  it('should remove a specific search', () => {
    useSearchStore.setState({ recentSearches: ['risotto', 'pan', 'sopa'] });
    useSearchStore.getState().removeRecent('pan');
    expect(useSearchStore.getState().recentSearches).toEqual(['risotto', 'sopa']);
  });

  it('should clear all searches', () => {
    useSearchStore.setState({ recentSearches: ['risotto', 'pan'] });
    useSearchStore.getState().clearRecent();
    expect(useSearchStore.getState().recentSearches).toEqual([]);
  });
});
