import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { spacing, radius, useTheme } from '@/theme';
import { Text } from './Text';
import { tipCategoryConfig } from '@/constants/tipCategories';
import type { Tip } from '@/types';

interface TipCardProps {
  tip: Tip;
  onPress: () => void;
  compact?: boolean;
}

export function TipCard({ tip, onPress, compact = false }: TipCardProps) {
  const { i18n } = useTranslation();
  const { theme, isDark } = useTheme();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const config = tipCategoryConfig[tip.category];
  const Icon = config.icon;
  const iconBg = isDark ? config.bgDark : config.bg;

  if (compact) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.compactCard,
          {
            backgroundColor: isDark ? theme.background.secondary : theme.background.primary,
            borderColor: theme.border,
          },
        ]}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={tip.title[lang]}
      >
        <View style={[styles.iconCircle, { backgroundColor: iconBg }]}>
          <Icon size={18} color={config.color} />
        </View>
        <Text variant="bodySmall" numberOfLines={2} style={styles.compactTitle}>
          {tip.title[lang]}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: isDark ? theme.background.secondary : theme.background.primary,
          borderColor: theme.border,
        },
      ]}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={tip.title[lang]}
    >
      <View style={[styles.iconCircle, { backgroundColor: iconBg }]}>
        <Icon size={20} color={config.color} />
      </View>
      <View style={styles.cardContent}>
        <Text variant="body" numberOfLines={2} style={styles.cardTitle}>
          {tip.title[lang]}
        </Text>
        <Text variant="bodySmall" color={theme.text.secondary} numberOfLines={2}>
          {tip.content[lang]}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.md,
  },
  cardContent: {
    flex: 1,
    gap: spacing.xs,
  },
  cardTitle: {
    fontWeight: '600',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactCard: {
    width: 140,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    alignItems: 'center',
    gap: spacing.sm,
  },
  compactTitle: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
