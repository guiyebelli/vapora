import React from 'react';
import { View, ScrollView, Pressable, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react-native';
import Constants from 'expo-constants';

import { Text } from '@/components/ui';
import { useTheme, spacing } from '@/theme';
import LogoIcon from '../../assets/illustrations/logo-icon.svg';

export default function AboutScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const version = Constants.expoConfig?.version ?? '1.0.0';

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background.primary }]}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          hitSlop={12}
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={theme.text.primary} />
        </Pressable>
        <Text variant="body" style={styles.headerTitle}>
          {t('about.title')}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo + Version */}
        <View style={styles.logoSection}>
          <LogoIcon width={120} height={120} />
          <Text variant="h1" color={theme.accent}>Vapora</Text>
          <Text variant="body" color={theme.text.secondary}>
            {t('onboarding.welcomeSub')}
          </Text>
          <Text variant="caption" color={theme.text.tertiary} style={styles.version}>
            v{version}
          </Text>
        </View>

        {/* Description */}
        <View style={[styles.descriptionSection, { borderTopColor: theme.border }]}>
          <Text variant="body" color={theme.text.secondary} style={styles.description}>
            {t('about.description')}
          </Text>
          <Text variant="caption" color={theme.text.tertiary} style={styles.disclaimer}>
            {t('about.disclaimer')}
          </Text>
        </View>

        {/* Links */}
        <View style={[styles.linksSection, { borderTopColor: theme.border }]}>
          <Pressable
            onPress={() => Linking.openURL('https://guiyebelli.github.io/vapora/privacy.html')}
            accessibilityRole="link"
            accessibilityLabel={t('settings.privacy')}
            style={styles.subtleLink}
          >
            <Text variant="caption" color={theme.text.tertiary} style={styles.subtleLinkText}>
              {t('settings.privacy')}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {
    padding: spacing.xs,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 32,
  },
  scrollContent: {
    paddingBottom: spacing['2xl'],
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: spacing['2xl'],
    gap: spacing.xs,
  },
  version: {
    marginTop: spacing.sm,
  },
  descriptionSection: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
  disclaimer: {
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: 18,
  },
  linksSection: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    gap: spacing.md,
  },
  subtleLink: {
    paddingVertical: spacing.sm,
  },
  subtleLinkText: {
    textDecorationLine: 'underline',
  },
});
