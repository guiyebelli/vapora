import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import i18n from '@/i18n';
import { zustandAsyncStorage } from './storage';

type Language = 'es' | 'en';
type TMModel = 'tm5' | 'tm6' | 'both';
type ThemeMode = 'light' | 'dark' | 'system';

interface SettingsState {
  language: Language;
  tmModel: TMModel;
  theme: ThemeMode;
  hasCompletedOnboarding: boolean;
  setLanguage: (language: Language) => void;
  setTMModel: (model: TMModel) => void;
  setTheme: (theme: ThemeMode) => void;
  completeOnboarding: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: (i18n.language as Language) ?? 'es',
      tmModel: 'both',
      theme: 'system',
      hasCompletedOnboarding: false,
      setLanguage: (language) => {
        i18n.changeLanguage(language);
        set({ language });
      },
      setTMModel: (tmModel) => set({ tmModel }),
      setTheme: (theme) => set({ theme }),
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
    }),
    {
      name: 'vapora-settings',
      storage: createJSONStorage(() => zustandAsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.language) {
          i18n.changeLanguage(state.language);
        }
      },
    },
  ),
);
