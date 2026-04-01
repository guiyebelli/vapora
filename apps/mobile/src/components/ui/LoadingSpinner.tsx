import React, { useEffect, useMemo } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export function LoadingSpinner({ size = 48, color }: LoadingSpinnerProps) {
  const rotateAnim = useMemo(() => new Animated.Value(0), []);
  const vapor1 = useMemo(() => new Animated.Value(0), []);
  const vapor2 = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    // Rotate the whole logo
    const spin = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    // Vapor pulse
    const pulse1 = Animated.loop(
      Animated.sequence([
        Animated.timing(vapor1, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(vapor1, { toValue: 0, duration: 800, useNativeDriver: true }),
      ]),
    );

    const pulse2 = Animated.loop(
      Animated.sequence([
        Animated.delay(400),
        Animated.timing(vapor2, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(vapor2, { toValue: 0, duration: 800, useNativeDriver: true }),
      ]),
    );

    spin.start();
    pulse1.start();
    pulse2.start();

    return () => {
      spin.stop();
      pulse1.stop();
      pulse2.stop();
    };
  }, [rotateAnim, vapor1, vapor2]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const strokeColor = color ?? '#E85D2C';
  const potColor = color ?? '#E85D2C';

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Defs>
            <LinearGradient id="spinner-grad" x1="0" y1="1" x2="0" y2="0">
              <Stop offset="0%" stopColor={potColor} />
              <Stop offset="100%" stopColor={potColor} stopOpacity="0.6" />
            </LinearGradient>
          </Defs>
          {/* Olla simplificada */}
          <Rect x="20" y="50" width="60" height="32" rx="8" fill="url(#spinner-grad)" />
          <Rect x="16" y="44" width="68" height="10" rx="5" fill={potColor} />
          {/* Asas */}
          <Rect x="6" y="58" width="12" height="6" rx="3" fill={potColor} opacity="0.6" />
          <Rect x="82" y="58" width="12" height="6" rx="3" fill={potColor} opacity="0.6" />
        </Svg>
      </Animated.View>

      {/* Vapor animado (no rota) */}
      <Animated.View style={[styles.vaporContainer, { width: size, height: size * 0.5, opacity: vapor1.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0.7] }) }]}>
        <Svg width={size} height={size * 0.5} viewBox="0 0 100 50">
          <Path d="M35 42 C35 30,45 30,45 18 C45 8,35 8,35 0" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </Svg>
      </Animated.View>

      <Animated.View style={[styles.vaporContainer, { width: size, height: size * 0.5, opacity: vapor2.interpolate({ inputRange: [0, 1], outputRange: [0.2, 0.6] }) }]}>
        <Svg width={size} height={size * 0.5} viewBox="0 0 100 50">
          <Path d="M65 42 C65 30,75 30,75 18 C75 8,65 8,65 0" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  vaporContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
