import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { colors, radius, spacing, useTheme } from '@/theme';
import { Text } from './Text';

type ChipVariant = 'default' | 'selected' | 'category';

interface ChipProps {
  label: string;
  selected?: boolean;
  variant?: ChipVariant;
  onPress?: () => void;
  icon?: string;
}

export function Chip({
  label,
  selected = false,
  variant = 'default',
  onPress,
  icon,
}: ChipProps) {
  const { theme, isDark } = useTheme();

  const resolvedVariant = selected && variant === 'default' ? 'selected' : variant;

  const variantConf = {
    default: {
      bg: theme.background.card,
      text: theme.text.secondary,
    },
    selected: {
      bg: theme.accent,
      text: theme.text.inverse,
    },
    category: {
      bg: isDark ? colors.accent[900] : colors.accent[100],
      text: isDark ? colors.accent[300] : colors.accent[700],
    },
  }[resolvedVariant];

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
      hitSlop={{ top: 6, bottom: 6, left: 4, right: 4 }}
      style={[styles.container, { backgroundColor: variantConf.bg }]}
    >
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      <Text variant="bodySmall" color={variantConf.text}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  icon: {
    fontSize: 14,
  },
});
