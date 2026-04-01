import '@/i18n';
import { useEffect } from 'react';
import { ActivityIndicator, View, useColorScheme } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme, useFontsLoaded } from '@/theme';
import { colors } from '@/theme';
import { useSettingsStore } from '@/store/useSettingsStore';

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
  const systemScheme = useColorScheme();
  const isDarkFallback = systemScheme === 'dark';

  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDarkFallback ? colors.neutral[900] : colors.neutral[0],
      }}>
        <ActivityIndicator
          size="large"
          color={isDarkFallback ? colors.primary[400] : colors.primary[500]}
        />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
