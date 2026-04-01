import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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
import LogoIcon from '../../../assets/illustrations/logo-icon.svg';

type SheetType = 'language' | 'tmModel' | null;

const LANGUAGE_OPTIONS = [
  { value: 'es' as const, label: 'Español', icon: '🇪🇸' },
  { value: 'en' as const, label: 'English', icon: '🇬🇧' },
];

const TM_MODEL_OPTIONS = [
  { value: 'tm5' as const, label: 'Thermomix TM5' },
  { value: 'tm6' as const, label: 'Thermomix TM6' },
  { value: 'both' as const, label: '' },
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

  const isDarkMode = themeMode === 'dark';

  const tmOptions = TM_MODEL_OPTIONS.map((o) => ({
    ...o,
    label: o.value === 'both' ? t('settings.tmBoth') : o.label,
  }));

  const handleThemeToggle = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

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
              label={t('settings.language')}
              value={languageDisplay}
              onPress={() => setActiveSheet('language')}
            />
            <SettingsRow
              label={t('settings.thermomix')}
              value={tmModelDisplay}
              onPress={() => setActiveSheet('tmModel')}
            />
            <SettingsRow
              label={t('settings.themeDark')}
              switchValue={isDarkMode}
              onSwitchChange={handleThemeToggle}
            />
          </SettingsGroup>
        </View>

        {/* INFORMACIÓN */}
        <SectionLabel label={t('settings.info')} />
        <View style={styles.groupContainer}>
          <SettingsGroup>
            <SettingsRow
              label={t('settings.about')}
              onPress={() => router.push('/about')}
            />
          </SettingsGroup>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <LogoIcon width={48} height={48} />
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
});
