import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { radius, spacing, fontFamily, useTheme } from '@/theme';
import { Text } from './Text';

interface InputProps extends Omit<TextInputProps, 'style'> {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  leftIcon?: React.ReactNode;
  onClear?: () => void;
  style?: ViewStyle;
}

export function Input({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  onClear,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.glass.input,
          borderColor: focused ? theme.accent : theme.glass.border,
        },
        style,
      ]}
    >
      {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={theme.text.tertiary}
        style={[
          styles.input,
          { color: theme.text.primary },
          leftIcon ? styles.inputWithIcon : undefined,
        ]}
        accessibilityLabel={placeholder}
        {...rest}
      />

      {onClear && value ? (
        <Pressable
          onPress={onClear}
          accessibilityRole="button"
          accessibilityLabel={t('common.clear')}
          hitSlop={8}
          style={styles.clearButton}
        >
          <Text color={theme.text.tertiary} style={styles.clearText}>
            ✕
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderWidth: 1,
    borderRadius: radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  leftIcon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: fontFamily.body,
    fontSize: 16,
    padding: 0,
  },
  inputWithIcon: {
    paddingLeft: 0,
  },
  clearButton: {
    marginLeft: spacing.sm,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    fontSize: 14,
  },
});
