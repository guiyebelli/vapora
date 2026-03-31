import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import { textStyles, useTheme } from '@/theme';

type TextVariant = keyof typeof textStyles;

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
  children: React.ReactNode;
}

export function Text({
  variant = 'body',
  color,
  style,
  children,
  ...rest
}: TextProps) {
  const { theme } = useTheme();

  return (
    <RNText
      allowFontScaling={true}
      accessibilityRole="text"
      style={[
        { color: theme.text.primary },
        textStyles[variant],
        color ? { color } : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}
