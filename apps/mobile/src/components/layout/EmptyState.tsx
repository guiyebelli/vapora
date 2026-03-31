import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing, useTheme } from '@/theme';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

interface EmptyStateProps {
  icon?: string;
  illustration?: React.ReactNode;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon,
  illustration,
  title,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {illustration ? (
        <View style={styles.illustration}>{illustration}</View>
      ) : icon ? (
        <Text style={styles.icon}>{icon}</Text>
      ) : null}
      <Text variant="h2" style={styles.title}>
        {title}
      </Text>
      <Text variant="body" color={theme.text.secondary} style={styles.message}>
        {message}
      </Text>
      {actionLabel && onAction ? (
        <Button title={actionLabel} onPress={onAction} variant="primary" />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  icon: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  illustration: {
    marginBottom: spacing.lg,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  message: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
});
