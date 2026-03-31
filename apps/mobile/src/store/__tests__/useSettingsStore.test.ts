import { useSettingsStore } from '../useSettingsStore';

jest.mock('@/i18n', () => ({
  language: 'es',
  changeLanguage: jest.fn(),
}));

beforeEach(() => {
  useSettingsStore.setState({
    language: 'es',
    tmModel: 'both',
    theme: 'system',
    hasCompletedOnboarding: false,
  });
});

describe('useSettingsStore', () => {
  it('should have correct default values', () => {
    const state = useSettingsStore.getState();
    expect(state.language).toBe('es');
    expect(state.tmModel).toBe('both');
    expect(state.theme).toBe('system');
    expect(state.hasCompletedOnboarding).toBe(false);
  });

  it('should set language', () => {
    useSettingsStore.getState().setLanguage('en');
    expect(useSettingsStore.getState().language).toBe('en');
  });

  it('should set TM model', () => {
    useSettingsStore.getState().setTMModel('tm6');
    expect(useSettingsStore.getState().tmModel).toBe('tm6');
  });

  it('should set theme', () => {
    useSettingsStore.getState().setTheme('dark');
    expect(useSettingsStore.getState().theme).toBe('dark');
  });

  it('should complete onboarding', () => {
    useSettingsStore.getState().completeOnboarding();
    expect(useSettingsStore.getState().hasCompletedOnboarding).toBe(true);
  });

  it('should allow setting theme to system', () => {
    useSettingsStore.getState().setTheme('dark');
    useSettingsStore.getState().setTheme('system');
    expect(useSettingsStore.getState().theme).toBe('system');
  });

  it('should allow setting TM model to both', () => {
    useSettingsStore.getState().setTMModel('tm5');
    useSettingsStore.getState().setTMModel('both');
    expect(useSettingsStore.getState().tmModel).toBe('both');
  });
});
