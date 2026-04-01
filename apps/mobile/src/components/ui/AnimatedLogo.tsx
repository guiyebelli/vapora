import React, { useEffect, useMemo } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface AnimatedLogoProps {
  size?: number;
}

export function AnimatedLogo({ size = 32 }: AnimatedLogoProps) {
  const scale = size / 100;

  const vapor1Y = useMemo(() => new Animated.Value(0), []);
  const vapor2Y = useMemo(() => new Animated.Value(0), []);
  const vapor3Y = useMemo(() => new Animated.Value(0), []);
  const vapor1Opacity = useMemo(() => new Animated.Value(0.6), []);
  const vapor2Opacity = useMemo(() => new Animated.Value(0.45), []);
  const vapor3Opacity = useMemo(() => new Animated.Value(0.3), []);

  useEffect(() => {
    const createVaporAnimation = (
      translateY: Animated.Value,
      opacity: Animated.Value,
      baseOpacity: number,
      delay: number,
    ) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.parallel([
            Animated.timing(translateY, {
              toValue: -4 * scale,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: baseOpacity * 0.3,
              duration: 1500,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(translateY, {
              toValue: 0,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: baseOpacity,
              duration: 1500,
              useNativeDriver: true,
            }),
          ]),
        ]),
      );

    const a1 = createVaporAnimation(vapor1Y, vapor1Opacity, 0.6, 0);
    const a2 = createVaporAnimation(vapor2Y, vapor2Opacity, 0.45, 500);
    const a3 = createVaporAnimation(vapor3Y, vapor3Opacity, 0.3, 1000);

    a1.start();
    a2.start();
    a3.start();

    return () => {
      a1.stop();
      a2.stop();
      a3.stop();
    };
  }, [scale, vapor1Y, vapor2Y, vapor3Y, vapor1Opacity, vapor2Opacity, vapor3Opacity]);

  return (
    <View style={{ width: size, height: size }}>
      {/* Olla estática */}
      <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="logo-grad" x1="0" y1="1" x2="0" y2="0">
            <Stop offset="0%" stopColor="#E85D2C" />
            <Stop offset="100%" stopColor="#FF8C5A" />
          </LinearGradient>
        </Defs>
        <Rect x="16" y="48" width="68" height="38" rx="8" fill="url(#logo-grad)" />
        <Rect x="12" y="42" width="76" height="10" rx="5" fill="#E85D2C" />
        <Rect x="4" y="56" width="14" height="7" rx="3.5" fill="#C44A1F" />
        <Rect x="82" y="56" width="14" height="7" rx="3.5" fill="#C44A1F" />
      </Svg>

      {/* Vapor animado - 3 líneas superpuestas */}
      <Animated.View
        style={[
          styles.vaporContainer,
          {
            width: size,
            height: size * 0.4,
            top: 0,
            transform: [{ translateY: vapor1Y }],
            opacity: vapor1Opacity,
          },
        ]}
      >
        <Svg width={size} height={size * 0.4} viewBox="0 0 100 40">
          <Path
            d="M34 38 C34 28, 42 28, 42 18 C42 8, 34 8, 34 0"
            fill="none"
            stroke="#FF8C5A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>

      <Animated.View
        style={[
          styles.vaporContainer,
          {
            width: size,
            height: size * 0.4,
            top: 0,
            transform: [{ translateY: vapor2Y }],
            opacity: vapor2Opacity,
          },
        ]}
      >
        <Svg width={size} height={size * 0.4} viewBox="0 0 100 40">
          <Path
            d="M50 36 C50 24, 58 24, 58 12 C58 2, 50 2, 50 -6"
            fill="none"
            stroke="#FFAD7D"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>

      <Animated.View
        style={[
          styles.vaporContainer,
          {
            width: size,
            height: size * 0.4,
            top: 0,
            transform: [{ translateY: vapor3Y }],
            opacity: vapor3Opacity,
          },
        ]}
      >
        <Svg width={size} height={size * 0.4} viewBox="0 0 100 40">
          <Path
            d="M66 38 C66 28, 74 28, 74 18 C74 8, 66 8, 66 0"
            fill="none"
            stroke="#FFC9A8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  vaporContainer: {
    position: 'absolute',
    left: 0,
  },
});
