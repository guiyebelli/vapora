import React from 'react';
import { View, ScrollView, Pressable, StyleSheet, Linking } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Constants from 'expo-constants';

import { Text } from '@/components/ui';
import { ScreenWrapper } from '@/components/layout';
import { useTheme, spacing } from '@/theme';
import LogoIcon from '../../assets/illustrations/logo-icon.svg';

export default function AboutScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const version = Constants.expoConfig?.version ?? '1.0.0';

  return (
    <ScreenWrapper title={t('about.title')} onBack={() => router.back()}>
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
          <Pressable
            onPress={() => Linking.openURL('https://github.com/guiyebelli/vapora/blob/main/LICENSE')}
            accessibilityRole="link"
            accessibilityLabel={t('settings.licenses')}
            style={styles.subtleLink}
          >
            <Text variant="caption" color={theme.text.tertiary} style={styles.subtleLinkText}>
              {t('settings.licenses')}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL('https://github.com/guiyebelli/vapora/issues')}
            accessibilityRole="link"
            accessibilityLabel={t('settings.feedback')}
            style={styles.subtleLink}
          >
            <Text variant="caption" color={theme.text.tertiary} style={styles.subtleLinkText}>
              {t('settings.feedback')}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
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
