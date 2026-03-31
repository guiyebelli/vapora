import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandAsyncStorage } from './storage';

const MAX_RECENT = 10;

interface SearchState {
  recentSearches: string[];
  addRecent: (query: string) => void;
  removeRecent: (query: string) => void;
  clearRecent: () => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      recentSearches: [],
      addRecent: (query) =>
        set((state) => {
          const trimmed = query.trim();
          if (!trimmed) return state;
          const filtered = state.recentSearches.filter((q) => q !== trimmed);
          return {
            recentSearches: [trimmed, ...filtered].slice(0, MAX_RECENT),
          };
        }),
      removeRecent: (query) =>
        set((state) => ({
          recentSearches: state.recentSearches.filter((q) => q !== query),
        })),
      clearRecent: () => set({ recentSearches: [] }),
    }),
    {
      name: 'vapora-search',
      storage: createJSONStorage(() => zustandAsyncStorage),
    },
  ),
);
