import React from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Check } from 'lucide-react-native';
import { spacing, radius, useTheme } from '@/theme';
import { Text } from './Text';

interface SelectorOption<T extends string> {
  value: T;
  label: string;
  icon?: string;
}

interface SelectorSheetProps<T extends string> {
  visible: boolean;
  title: string;
  subtitle?: string;
  options: SelectorOption<T>[];
  selected: T;
  onSelect: (value: T) => void;
  onClose: () => void;
}

export function SelectorSheet<T extends string>({
  visible,
  title,
  subtitle,
  options,
  selected,
  onSelect,
  onClose,
}: SelectorSheetProps<T>) {
  const { theme } = useTheme();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.sheet, { backgroundColor: theme.background.primary }]}>
              <View style={[styles.handle, { backgroundColor: theme.border }]} />

              <Text variant="h2" style={styles.title}>{title}</Text>
              {subtitle ? (
                <Text variant="bodySmall" color={theme.text.secondary} style={styles.subtitle}>
                  {subtitle}
                </Text>
              ) : null}

              <View style={[styles.optionsContainer, { backgroundColor: theme.background.card }]}>
                {options.map((option, index) => (
                  <React.Fragment key={option.value}>
                    <Pressable
                      onPress={() => {
                        onSelect(option.value);
                        onClose();
                      }}
                      accessibilityRole="radio"
                      accessibilityState={{ selected: selected === option.value }}
                      style={({ pressed }) => [
                        styles.option,
                        pressed && { backgroundColor: theme.border },
                        index === 0 && styles.optionFirst,
                        index === options.length - 1 && styles.optionLast,
                      ]}
                    >
                      {option.icon ? (
                        <Text style={styles.optionIcon}>{option.icon}</Text>
                      ) : null}
                      <Text variant="body" style={styles.optionLabel}>
                        {option.label}
                      </Text>
                      {selected === option.value && (
                        <Check size={20} color={theme.accent} />
                      )}
                    </Pressable>
                    {index < options.length - 1 && (
                      <View style={[styles.separator, { backgroundColor: theme.border }]} />
                    )}
                  </React.Fragment>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    borderTopLeftRadius: radius['2xl'],
    borderTopRightRadius: radius['2xl'],
    paddingHorizontal: spacing.md,
    paddingBottom: spacing['2xl'],
  },
  handle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginBottom: spacing.md,
  },
  optionsContainer: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginTop: spacing.md,
  },
  option: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  optionFirst: {
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
  },
  optionLast: {
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  optionIcon: {
    fontSize: 20,
    width: 28,
    textAlign: 'center',
    marginRight: spacing.sm,
  },
  optionLabel: {
    flex: 1,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: spacing.md,
  },
});
