import React from 'react';
import {
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { colors, radius, textStyles, useTheme } from '@/theme';
import { Text } from './Text';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const sizeConfig: Record<ButtonSize, { height: number; borderRadius: number; textVariant: 'button' | 'buttonSmall' }> = {
  sm: { height: 36, borderRadius: radius.md, textVariant: 'buttonSmall' },
  md: { height: 44, borderRadius: radius.lg, textVariant: 'button' },
  lg: { height: 52, borderRadius: radius.lg, textVariant: 'button' },
};

export function Button({
  variant = 'primary',
  size = 'md',
  title,
  onPress,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const { theme } = useTheme();
  const sizeConf = sizeConfig[size];

  const variantConf = {
    primary: {
      container: { backgroundColor: theme.accent },
      textColor: theme.text.inverse,
      loaderColor: theme.text.inverse,
    },
    secondary: {
      container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.accent,
      },
      textColor: theme.accent,
      loaderColor: theme.accent,
    },
    ghost: {
      container: { backgroundColor: 'transparent' },
      textColor: theme.text.secondary,
      loaderColor: theme.text.secondary,
    },
    danger: {
      container: { backgroundColor: colors.semantic.error },
      textColor: colors.neutral[0],
      loaderColor: colors.neutral[0],
    },
  }[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading }}
      style={({ pressed }) => [
        styles.base,
        variantConf.container,
        {
          height: sizeConf.height,
          borderRadius: sizeConf.borderRadius,
        },
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variantConf.loaderColor} />
      ) : (
        <Text
          variant={sizeConf.textVariant}
          color={variantConf.textColor}
          style={textStyles[sizeConf.textVariant]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  disabled: {
    opacity: 0.4,
  },
  pressed: {
    opacity: 0.85,
  },
});
