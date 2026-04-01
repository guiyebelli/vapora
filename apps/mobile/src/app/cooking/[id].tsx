import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react-native';
import { useKeepAwake } from 'expo-keep-awake';

import { Text, Chip } from '@/components/ui';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useTheme, spacing, radius, colors } from '@/theme';
import type { ThermomixSettings } from '@/types/recipe';

const CONFETTI_COLORS = ['#E85D2C', '#FF8C5A', '#22A860', '#F59E0B', '#3B82F6', '#FFAD7D', '#6DD49D'];
const CONFETTI_COUNT = 40;

// Pre-generate random seeds outside render
const confettiSeeds = Array.from({ length: CONFETTI_COUNT }).map(() => ({
  // All start from bottom center, spread out
  startX: 160 + (Math.random() - 0.5) * 40,
  startY: 700,
  // Explode upward and outward
  peakY: -(Math.random() * 400 + 100),
  endX: (Math.random() - 0.5) * 400 + 180,
  endY: Math.random() * 300 + 200,
  launchDuration: 600 + Math.random() * 400,
  fallDuration: 1500 + Math.random() * 1000,
  rotateEnd: Math.random() * 10 - 5,
  colorIdx: Math.floor(Math.random() * CONFETTI_COLORS.length),
  size: Math.random() * 8 + 6,
  isCircle: Math.random() > 0.5,
}));

function ConfettiEffect({ onDone }: { onDone: () => void }) {
  const particles = useMemo(
    () =>
      confettiSeeds.map((seed) => ({
        x: new Animated.Value(seed.startX),
        y: new Animated.Value(seed.startY),
        rotate: new Animated.Value(0),
        opacity: new Animated.Value(1),
        color: CONFETTI_COLORS[seed.colorIdx],
        size: seed.size,
        isCircle: seed.isCircle,
        seed,
      })),
    [],
  );

  useEffect(() => {
    const animations = particles.map((p) =>
      Animated.sequence([
        // Phase 1: Explode upward from bottom
        Animated.parallel([
          Animated.timing(p.y, {
            toValue: p.seed.peakY,
            duration: p.seed.launchDuration,
            useNativeDriver: true,
          }),
          Animated.timing(p.x, {
            toValue: p.seed.endX,
            duration: p.seed.launchDuration,
            useNativeDriver: true,
          }),
          Animated.timing(p.rotate, {
            toValue: p.seed.rotateEnd,
            duration: p.seed.launchDuration,
            useNativeDriver: true,
          }),
        ]),
        // Phase 2: Fall down with gravity + fade
        Animated.parallel([
          Animated.timing(p.y, {
            toValue: p.seed.endY,
            duration: p.seed.fallDuration,
            useNativeDriver: true,
          }),
          Animated.timing(p.opacity, {
            toValue: 0,
            duration: p.seed.fallDuration,
            useNativeDriver: true,
          }),
          Animated.timing(p.rotate, {
            toValue: p.seed.rotateEnd * 3,
            duration: p.seed.fallDuration,
            useNativeDriver: true,
          }),
        ]),
      ]),
    );

    Animated.stagger(20, animations).start(() => {
      onDone();
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={confettiStyles.container} pointerEvents="none">
      {particles.map((p, i) => (
        <Animated.View
          key={i}
          style={[
            confettiStyles.particle,
            {
              width: p.size,
              height: p.isCircle ? p.size : p.size * 2.5,
              borderRadius: p.isCircle ? p.size / 2 : 2,
              backgroundColor: p.color,
              opacity: p.opacity,
              transform: [
                { translateX: p.x },
                { translateY: p.y },
                { rotate: p.rotate.interpolate({ inputRange: [-15, 15], outputRange: ['-540deg', '540deg'] }) },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
}

const confettiStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
  },
});

function StepTimer({ seconds: initialSeconds, accent, theme: th }: { seconds: number; accent: string; theme: ReturnType<typeof useTheme>['theme'] }) {
  const { t } = useTranslation();
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (running && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setRunning(false);
            setFinished(true);
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, secondsLeft]);

  useEffect(() => {
    if (running) {
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: secondsLeft * 1000,
        useNativeDriver: false,
      }).start();
    } else {
      progressAnim.stopAnimation();
    }
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const handleToggle = () => {
    if (finished) {
      setSecondsLeft(initialSeconds);
      setFinished(false);
      setRunning(false);
      progressAnim.setValue(0);
    } else {
      setRunning(!running);
    }
  };

  const progressWidth = progressAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

  return (
    <View style={timerStyles.section}>
      <View style={[timerStyles.progressBg, { backgroundColor: th.border }]}>
        <Animated.View style={[timerStyles.progressFill, { width: progressWidth, backgroundColor: finished ? colors.semantic.success : accent }]} />
      </View>
      <Text variant="h1" color={finished ? colors.semantic.success : th.text.primary} style={timerStyles.display}>
        {formatTime(secondsLeft)}
      </Text>
      <Pressable
        onPress={handleToggle}
        accessibilityRole="button"
        accessibilityLabel={finished ? t('cooking.reset') : running ? t('cooking.pause') : t('cooking.start')}
        style={[timerStyles.button, { backgroundColor: finished ? colors.semantic.success : accent }]}
      >
        {finished ? <RotateCcw size={28} color="#FFF" /> : running ? <Pause size={28} color="#FFF" /> : <Play size={28} color="#FFF" />}
      </Pressable>
    </View>
  );
}

const timerStyles = StyleSheet.create({
  section: { alignItems: 'center', paddingVertical: spacing.lg, gap: spacing.md },
  progressBg: { width: '100%', height: 6, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 3 },
  display: { fontSize: 56, lineHeight: 64, fontVariant: ['tabular-nums'] },
  button: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
});

export default function CookingModeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en';

  useKeepAwake();

  const recipe = useRecipeStore((s) => s.getRecipeById)(id ?? '');
  const steps = useMemo(
    () => (recipe?.steps ?? []).sort((a, b) => a.order - b.order),
    [recipe],
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const step = steps[currentStep];
  const totalSteps = steps.length;
  const stepTimer = step?.thermomixSettings?.time ?? step?.timer ?? 0;
  const hasTimer = stepTimer > 0;

  const formatSpeed = (speed: ThermomixSettings['speed']): string => {
    if (speed === 'turbo') return t('tm.turbo');
    if (speed === 'spatula') return t('tm.spatula');
    return t('tm.speed', { value: speed });
  };

  const formatTemperature = (temp: ThermomixSettings['temperature']): string => {
    if (temp === 'varoma') return t('tm.temperatureVaroma');
    return t('tm.temperature', { value: temp });
  };

  const handlePrevious = useCallback(() => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfetti(true);
    }
  }, [currentStep, totalSteps]);

  const handleConfettiDone = useCallback(() => {
    router.back();
  }, []);


  if (!recipe || steps.length === 0) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background.primary }]}>
        <View style={styles.centered}>
          <Text variant="body" color={theme.text.secondary}>{t('common.error')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background.primary }]} edges={['top', 'bottom']}>
      {showConfetti && <ConfettiEffect onDone={handleConfettiDone} />}
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          hitSlop={12}
          style={styles.closeButton}
        >
          <X size={24} color={theme.text.primary} />
        </Pressable>
        <View style={styles.headerCenter}>
          <Text variant="bodySmall" color={theme.text.secondary}>
            {recipe.title[lang]}
          </Text>
          <Text variant="caption" color={theme.text.tertiary}>
            {t('cooking.stepOf', { current: currentStep + 1, total: totalSteps })}
          </Text>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      {/* Step progress dots */}
      <View style={styles.progressDots}>
        {steps.map((_, i) => (
          <View
            key={i}
            style={[
              styles.progressDot,
              {
                backgroundColor: i === currentStep ? theme.accent : i < currentStep ? colors.primary[300] : theme.border,
                width: i === currentStep ? 16 : 8,
              },
            ]}
          />
        ))}
      </View>

      {/* Step content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Step number */}
        <Text variant="h1" color={theme.accent} style={styles.stepNumber}>
          {currentStep + 1}
        </Text>

        {/* Instruction */}
        <Text variant="h2" color={theme.text.primary} style={styles.instruction}>
          {step.instruction[lang]}
        </Text>

        {/* TM Settings */}
        {step.thermomixSettings && (
          <View style={[styles.tmSettings, { backgroundColor: theme.background.secondary }]}>
            <View style={styles.tmChips}>
              {step.thermomixSettings.speed != null && (
                <Chip label={formatSpeed(step.thermomixSettings.speed)} variant="tm" />
              )}
              {step.thermomixSettings.temperature != null && (
                <Chip label={formatTemperature(step.thermomixSettings.temperature)} variant="tm" />
              )}
              {step.thermomixSettings.time != null && (
                <Chip label={t('recipe.minutes', { count: step.thermomixSettings.time })} variant="tm" />
              )}
            </View>
          </View>
        )}

        {/* Tip */}
        {step.tip && (
          <View style={[styles.tipCard, { backgroundColor: theme.accentLight }]}>
            <Text variant="bodySmall" color={theme.accent} style={styles.tipLabel}>
              {t('recipe.tip')}
            </Text>
            <Text variant="body" color={theme.text.primary}>
              {step.tip[lang]}
            </Text>
          </View>
        )}

        {/* Timer */}
        {hasTimer && (
          <StepTimer key={currentStep} seconds={stepTimer} accent={theme.accent} theme={theme} />
        )}
      </ScrollView>

      {/* Navigation buttons */}
      <View style={[styles.navigation, { borderTopColor: theme.border }]}>
        <Pressable
          onPress={handlePrevious}
          disabled={currentStep === 0}
          accessibilityRole="button"
          accessibilityLabel={t('cooking.previous')}
          style={[styles.navButton, currentStep === 0 && styles.navButtonDisabled]}
        >
          <ChevronLeft size={24} color={currentStep === 0 ? theme.text.tertiary : theme.text.primary} />
          <Text variant="body" color={currentStep === 0 ? theme.text.tertiary : theme.text.primary}>
            {t('cooking.previous')}
          </Text>
        </Pressable>

        <Text variant="bodySmall" color={theme.text.tertiary}>
          {currentStep + 1} / {totalSteps}
        </Text>

        <Pressable
          onPress={handleNext}
          accessibilityRole="button"
          accessibilityLabel={currentStep === totalSteps - 1 ? t('cooking.finish') : t('cooking.next')}
          style={styles.navButton}
        >
          <Text variant="body" color={theme.accent}>
            {currentStep === totalSteps - 1 ? t('cooking.finish') : t('cooking.next')}
          </Text>
          {currentStep < totalSteps - 1 && <ChevronRight size={24} color={theme.accent} />}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  closeButton: {
    padding: spacing.xs,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerSpacer: {
    width: 32,
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingVertical: spacing.md,
  },
  progressDot: {
    height: 8,
    borderRadius: 4,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  stepNumber: {
    fontSize: 64,
    lineHeight: 72,
    marginBottom: spacing.md,
  },
  instruction: {
    lineHeight: 32,
    marginBottom: spacing.lg,
  },
  tmSettings: {
    padding: spacing.md,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
  },
  tmChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tipCard: {
    padding: spacing.md,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
  },
  tipLabel: {
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    padding: spacing.sm,
  },
  navButtonDisabled: {
    opacity: 0.4,
  },
});
