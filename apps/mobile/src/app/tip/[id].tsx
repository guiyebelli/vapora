import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import {
  ChevronLeft,
  Timer,
  Smartphone,
} from 'lucide-react-native';

import { Text, Chip } from '@/components';
import { useTheme, spacing, radius, colors } from '@/theme';
import { useTipStore } from '@/store/useTipStore';
import { tipCategoryConfig } from '@/constants/tipCategories';

export default function TipDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { theme, isDark } = useTheme();
  const router = useRouter();
  const tip = useTipStore((s) => s.getTipById(id));
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';

  if (!tip) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      >
        <Text variant="body">{t('common.error')}</Text>
      </SafeAreaView>
    );
  }

  const config = tipCategoryConfig[tip.category];
  const Icon = config.icon;
  const iconBg = isDark ? config.bgDark : config.bg;

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <ChevronLeft size={24} color={theme.text.primary} />
        </TouchableOpacity>
        <Text variant="h2" numberOfLines={1} style={styles.headerTitle} accessibilityRole="header">
          {t('tips.title')}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Category badge + icon */}
        <View style={styles.categoryRow}>
          <View style={[styles.iconCircle, { backgroundColor: iconBg }]}>
            <Icon size={24} color={config.color} />
          </View>
          <Chip label={t(`tips.${tip.category}`)} variant="default" />
        </View>

        {/* Title */}
        <Text variant="h1" style={styles.title}>
          {tip.title[lang]}
        </Text>

        {/* TM Settings badge */}
        {tip.thermomixSettings ? (
          <View
            style={[
              styles.settingsBadge,
              {
                backgroundColor: isDark ? theme.background.secondary : colors.primary[50],
                borderColor: isDark ? theme.border : colors.primary[200],
              },
            ]}
          >
            <Timer size={16} color={config.color} />
            <Text variant="bodySmall" style={styles.settingsText}>
              {tip.thermomixSettings}
            </Text>
          </View>
        ) : null}

        {/* Compatibility badge */}
        {tip.compatibility ? (
          <View
            style={[
              styles.settingsBadge,
              {
                backgroundColor: isDark ? theme.background.secondary : colors.accent[50],
                borderColor: isDark ? theme.border : colors.accent[200],
              },
            ]}
          >
            <Smartphone size={16} color={colors.accent[500]} />
            <Text variant="bodySmall" style={styles.settingsText}>
              {tip.compatibility}
            </Text>
          </View>
        ) : null}

        {/* Content */}
        <Text
          variant="body"
          color={theme.text.secondary}
          style={styles.content}
        >
          {tip.content[lang]}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  headerTitle: {
    flex: 1,
  },
  headerSpacer: {
    width: 24,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing['2xl'],
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: spacing.md,
  },
  settingsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    borderWidth: 1,
    marginBottom: spacing.sm,
  },
  settingsText: {
    fontWeight: '600',
  },
  content: {
    marginTop: spacing.md,
    lineHeight: 24,
  },
});
