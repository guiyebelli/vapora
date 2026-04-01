import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import { useTheme, spacing } from '@/theme';
import { Text } from '../ui/Text';

interface ScreenWrapperProps {
  children: React.ReactNode;
  /** Title for internal screens with back button */
  title?: string;
  /** Show back button (internal screens) */
  onBack?: () => void;
  /** Safe area edges to apply */
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

export function ScreenWrapper({
  children,
  title,
  onBack,
  edges = ['top'],
}: ScreenWrapperProps) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background.primary }]}
      edges={edges}
    >
      {onBack && title ? (
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <Pressable
            onPress={onBack}
            accessibilityRole="button"
            accessibilityLabel={title}
            hitSlop={12}
            style={styles.backButton}
          >
            <ChevronLeft size={24} color={theme.text.primary} />
          </Pressable>
          <Text variant="body" style={styles.headerTitle}>
            {title}
          </Text>
          <View style={styles.headerSpacer} />
        </View>
      ) : null}
      {children}
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
});
