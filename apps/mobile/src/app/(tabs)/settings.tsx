import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Constants from 'expo-constants';

import {
  Text,
  SettingsRow,
  SettingsGroup,
  SectionLabel,
  SelectorSheet,
} from '@/components/ui';
import { useTheme, spacing } from '@/theme';
import { useSettingsStore } from '@/store/useSettingsStore';

type SheetType = 'language' | 'tmModel' | 'theme' | null;

const LANGUAGE_OPTIONS = [
  { value: 'es' as const, label: 'Español', icon: '🇪🇸' },
  { value: 'en' as const, label: 'English', icon: '🇬🇧' },
];

const TM_MODEL_OPTIONS = [
  { value: 'tm5' as const, label: 'Thermomix TM5' },
  { value: 'tm6' as const, label: 'Thermomix TM6' },
  { value: 'both' as const, label: '' }, // label set dynamically via i18n
];

const THEME_OPTIONS = [
  { value: 'light' as const, label: '', icon: '☀️' },
  { value: 'dark' as const, label: '', icon: '🌙' },
  { value: 'system' as const, label: '', icon: '📱' },
];

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();
  const [activeSheet, setActiveSheet] = useState<SheetType>(null);

  const {
    language,
    tmModel,
    theme: themeMode,
    setLanguage,
    setTMModel,
    setTheme,
  } = useSettingsStore();

  const version = Constants.expoConfig?.version ?? '1.0.0';

  const languageDisplay = language === 'es' ? 'ES' : 'EN';

  const tmModelDisplay = {
    tm5: 'TM5',
    tm6: 'TM6',
    both: t('settings.tmBoth'),
  }[tmModel];

  const themeDisplay = {
    light: t('settings.themeLight'),
    dark: t('settings.themeDark'),
    system: t('settings.themeSystem'),
  }[themeMode];

  const tmOptions = TM_MODEL_OPTIONS.map((o) => ({
    ...o,
    label: o.value === 'both' ? t('settings.tmBoth') : o.label,
  }));

  const themeOptions = THEME_OPTIONS.map((o) => ({
    ...o,
    label: {
      light: t('settings.themeLight'),
      dark: t('settings.themeDark'),
      system: t('settings.themeSystem'),
    }[o.value],
  }));

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text variant="h1" style={styles.header} accessibilityRole="header">
          {t('settings.title')}
        </Text>

        {/* PREFERENCIAS */}
        <SectionLabel label={t('settings.preferences')} />
        <View style={styles.groupContainer}>
          <SettingsGroup>
            <SettingsRow
              icon="🌐"
              label={t('settings.language')}
              value={languageDisplay}
              onPress={() => setActiveSheet('language')}
            />
            <SettingsRow
              icon="🤖"
              label={t('settings.thermomix')}
              value={tmModelDisplay}
              onPress={() => setActiveSheet('tmModel')}
            />
            <SettingsRow
              icon="🎨"
              label={t('settings.theme')}
              value={themeDisplay}
              onPress={() => setActiveSheet('theme')}
            />
          </SettingsGroup>
        </View>

        {/* INFORMACIÓN */}
        <SectionLabel label={t('settings.info')} />
        <View style={styles.groupContainer}>
          <SettingsGroup>
            <SettingsRow
              icon="ℹ️"
              label={t('settings.about')}
              onPress={() => router.push('/about')}
            />
            <SettingsRow
              icon="📜"
              label={t('settings.licenses')}
              onPress={() => {
                Linking.openURL('https://github.com/guiyebelli/vapora');
              }}
            />
            <SettingsRow
              icon="🔒"
              label={t('settings.privacy')}
              onPress={() => {
                Linking.openURL('https://github.com/guiyebelli/vapora');
              }}
            />
            <SettingsRow
              icon="💬"
              label={t('settings.feedback')}
              onPress={() => {
                Linking.openURL('https://github.com/guiyebelli/vapora/issues');
              }}
            />
          </SettingsGroup>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>☁️</Text>
          <Text variant="caption" color={theme.text.tertiary}>
            Vapora
          </Text>
          <Text variant="caption" color={theme.text.tertiary}>
            v{version}
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Sheets */}
      <SelectorSheet
        visible={activeSheet === 'language'}
        title={t('settings.languageTitle')}
        options={LANGUAGE_OPTIONS}
        selected={language}
        onSelect={setLanguage}
        onClose={() => setActiveSheet(null)}
      />

      <SelectorSheet
        visible={activeSheet === 'tmModel'}
        title={t('settings.tmModel')}
        subtitle={t('settings.tmModelHint')}
        options={tmOptions}
        selected={tmModel}
        onSelect={setTMModel}
        onClose={() => setActiveSheet(null)}
      />

      <SelectorSheet
        visible={activeSheet === 'theme'}
        title={t('settings.themeTitle')}
        options={themeOptions}
        selected={themeMode}
        onSelect={setTheme}
        onClose={() => setActiveSheet(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing['2xl'],
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  groupContainer: {
    paddingHorizontal: spacing.md,
  },
  footer: {
    alignItems: 'center',
    paddingTop: spacing['2xl'],
    gap: 4,
  },
  footerLogo: {
    fontSize: 40,
    marginBottom: spacing.xs,
  },
});
