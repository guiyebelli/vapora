import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing, useTheme } from '@/theme';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
  illustration?: React.ReactNode;
}

export function ErrorState({ message, onRetry, illustration }: ErrorStateProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {illustration ? (
        <View style={styles.illustration}>{illustration}</View>
      ) : (
        <Text style={styles.icon}>⚠️</Text>
      )}
      <Text
        variant="body"
        color={theme.text.secondary}
        style={styles.message}
      >
        {message}
      </Text>
      <Button title="Reintentar" onPress={onRetry} variant="primary" />
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
  message: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
});
