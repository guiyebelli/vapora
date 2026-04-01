// Expo SDK 54 requires these globals for Jest compatibility
globalThis.__ExpoImportMetaRegistry = {
  url: 'file:///test',
};

// Provide structuredClone if not available (Expo tries to polyfill it and fails in Jest)
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = (val) => JSON.parse(JSON.stringify(val));
}

// Mock AsyncStorage — must be before store imports
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  return {
    SafeAreaView: ({ children, ...props }) =>
      React.createElement('View', props, children),
    SafeAreaProvider: ({ children }) => children,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

// Mock expo-font
jest.mock('expo-font', () => ({
  useFonts: () => [true],
  isLoaded: () => true,
  loadAsync: jest.fn(),
}));

// Mock @expo-google-fonts
jest.mock('@expo-google-fonts/plus-jakarta-sans/700Bold', () => ({}));
jest.mock('@expo-google-fonts/plus-jakarta-sans/600SemiBold', () => ({}));
jest.mock('@expo-google-fonts/inter/400Regular', () => ({}));
jest.mock('@expo-google-fonts/inter/500Medium', () => ({}));

// Mock expo-constants
jest.mock('expo-constants', () => ({
  __esModule: true,
  default: { expoConfig: { version: '1.0.0' } },
}));

// Mock expo-linking
jest.mock('expo-linking', () => ({
  openURL: jest.fn(),
}));

// Mock useColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: () => 'light',
}));

// Mock lucide-react-native
jest.mock('lucide-react-native', () => {
  const React = require('react');
  const mock = (name) =>
    React.forwardRef((props, ref) =>
      React.createElement('View', { ...props, ref, testID: `icon-${name}` }),
    );
  return new Proxy({}, { get: (_, name) => mock(name) });
});

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, opts) => {
      if (opts?.count !== undefined) return `${key}_${opts.count}`;
      return key;
    },
    i18n: { language: 'es', changeLanguage: jest.fn() },
  }),
}));

// Mock i18n module
jest.mock('@/i18n', () => ({
  __esModule: true,
  default: { language: 'es', changeLanguage: jest.fn() },
}));

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), back: jest.fn(), replace: jest.fn() }),
  useLocalSearchParams: () => ({}),
  router: { push: jest.fn(), back: jest.fn(), replace: jest.fn() },
  Link: 'Link',
  Tabs: 'Tabs',
  Stack: 'Stack',
}));

// Mock categoryIcons (SVGs imported as components)
jest.mock('@/data/categoryIcons', () => {
  const React = require('react');
  const mockIcon = React.forwardRef((props, ref) =>
    React.createElement('View', { ...props, ref, testID: 'category-icon' }),
  );
  return {
    categoryIcons: new Proxy({}, { get: () => mockIcon }),
  };
});
