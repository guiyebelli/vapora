import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { spacing, radius, useTheme } from '@/theme';
import { Text } from './Text';

interface SettingsRowProps {
  icon: string;
  label: string;
  value?: string;
  onPress: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export function SettingsRow({
  icon,
  label,
  value,
  onPress,
  isFirst = false,
  isLast = false,
}: SettingsRowProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={value ? `${label}, ${value}` : label}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: pressed ? theme.border : theme.background.card },
        isFirst && styles.first,
        isLast && styles.last,
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text variant="body" style={styles.label}>{label}</Text>
      {value ? (
        <Text variant="bodySmall" color={theme.text.tertiary} style={styles.value}>
          {value}
        </Text>
      ) : null}
      <ChevronRight size={16} color={theme.text.tertiary} />
    </Pressable>
  );
}

interface SettingsGroupProps {
  children: React.ReactNode;
}

export function SettingsGroup({ children }: SettingsGroupProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.group, { borderColor: theme.border }]}>
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        if (!React.isValidElement(child)) return child;
        return (
          <>
            {React.cloneElement(child as React.ReactElement<SettingsRowProps>, {
              isFirst: index === 0,
              isLast: index === count - 1,
            })}
            {index < count - 1 && (
              <View style={[styles.separator, { backgroundColor: theme.border }]} />
            )}
          </>
        );
      })}
    </View>
  );
}

interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  const { theme } = useTheme();

  return (
    <Text
      variant="caption"
      color={theme.text.tertiary}
      style={styles.sectionLabel}
      accessibilityRole="header"
    >
      {label.toUpperCase()}
    </Text>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  first: {
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
  },
  last: {
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  icon: {
    fontSize: 20,
    width: 28,
    textAlign: 'center',
  },
  label: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  value: {
    marginRight: spacing.sm,
  },
  group: {
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 56,
  },
  sectionLabel: {
    paddingLeft: spacing.md,
    paddingBottom: spacing.sm,
    paddingTop: spacing.lg,
    letterSpacing: 0.5,
  },
});
