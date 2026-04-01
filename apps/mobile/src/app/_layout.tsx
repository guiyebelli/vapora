import '@/i18n';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider, useTheme, useFontsLoaded } from '@/theme';
import { useSettingsStore } from '@/store/useSettingsStore';

// Keep splash visible until fonts are loaded
SplashScreen.preventAutoHideAsync();

function RootStack() {
  const { isDark } = useTheme();
  const router = useRouter();
  const segments = useSegments();
  const hasCompletedOnboarding = useSettingsStore((s) => s.hasCompletedOnboarding);

  useEffect(() => {
    const inOnboarding = segments[0] === 'onboarding';

    if (!hasCompletedOnboarding && !inOnboarding) {
      router.replace('/onboarding');
    } else if (hasCompletedOnboarding && inOnboarding) {
      router.replace('/(tabs)');
    }
  }, [hasCompletedOnboarding, segments, router]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="recipe/[id]" />
        <Stack.Screen name="cooking/[id]" options={{ presentation: 'modal' }} />
        <Stack.Screen name="category/[id]" />
        <Stack.Screen name="search" />
        <Stack.Screen name="about" />
      </Stack>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </>
  );
}

export default function RootLayout() {
  const fontsLoaded = useFontsLoaded();
  useColorScheme(); // Keep for system theme detection

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Splash screen stays visible
  }

  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
