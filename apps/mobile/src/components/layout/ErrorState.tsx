import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react-native';
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
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {illustration ? (
        <View style={styles.illustration}>{illustration}</View>
      ) : (
        <View style={styles.icon}>
          <AlertTriangle size={48} color={theme.accent} />
        </View>
      )}
      <Text
        variant="body"
        color={theme.text.secondary}
        style={styles.message}
      >
        {message}
      </Text>
      <Button title={t('common.retry')} onPress={onRetry} variant="primary" />
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
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  illustration: {
    marginBottom: spacing.lg,
  },
  message: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
});
