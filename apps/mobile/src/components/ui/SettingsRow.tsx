import React from 'react';
import { Pressable, Switch, View, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { spacing, radius, useTheme } from '@/theme';
import { Text } from './Text';

interface SettingsRowProps {
  label: string;
  value?: string;
  onPress?: () => void;
  icon?: string;
  isFirst?: boolean;
  isLast?: boolean;
  // Switch mode
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  // Custom right element
  rightElement?: React.ReactNode;
}

export function SettingsRow({
  label,
  value,
  onPress,
  icon,
  isFirst = false,
  isLast = false,
  switchValue,
  onSwitchChange,
  rightElement,
}: SettingsRowProps) {
  const { theme } = useTheme();

  const isSwitch = switchValue !== undefined && onSwitchChange !== undefined;

  const content = (
    <>
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      <Text variant="body" style={[styles.label, !icon && styles.labelNoIcon]}>{label}</Text>
      {rightElement ?? null}
      {isSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: theme.border, true: theme.accent }}
          thumbColor="#FFFFFF"
          accessibilityRole="switch"
          accessibilityLabel={label}
        />
      ) : (
        <>
          {value ? (
            <Text variant="bodySmall" color={theme.text.tertiary} style={styles.value}>
              {value}
            </Text>
          ) : null}
          <ChevronRight size={16} color={theme.text.tertiary} />
        </>
      )}
    </>
  );

  if (isSwitch) {
    return (
      <View
        style={[
          styles.row,
          { backgroundColor: theme.background.card + 'CC' },
          isFirst && styles.first,
          isLast && styles.last,
        ]}
        accessibilityLabel={label}
      >
        {content}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={value ? `${label}, ${value}` : label}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: pressed ? theme.border : theme.background.card + 'CC' },
        isFirst && styles.first,
        isLast && styles.last,
      ]}
    >
      {content}
    </Pressable>
  );
}

interface SettingsGroupProps {
  children: React.ReactNode;
}

export function SettingsGroup({ children }: SettingsGroupProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.group, { borderColor: theme.border + '80' }]}>
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
              <View style={[styles.separator, { backgroundColor: theme.border + '60' }]} />
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
  labelNoIcon: {
    marginLeft: 0,
  },
  value: {
    marginRight: spacing.sm,
  },
  group: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: spacing.md,
  },
  sectionLabel: {
    paddingLeft: spacing.md,
    paddingBottom: spacing.sm,
    paddingTop: spacing.lg,
    letterSpacing: 0.5,
  },
});
