import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Check, Gift, Globe, Cpu } from 'lucide-react-native';
import { getLocales } from 'expo-localization';

import { Text, Button } from '@/components/ui';
import { useTheme, spacing, radius } from '@/theme';
import { useSettingsStore } from '@/store/useSettingsStore';
import WelcomeIlus from '../../assets/illustrations/ilus-onboarding-welcome.svg';
import LanguageIlus from '../../assets/illustrations/ilus-onboarding-language.svg';
import ModelIlus from '../../assets/illustrations/ilus-onboarding-model.svg';

type Language = 'es' | 'en';
type TMModel = 'tm5' | 'tm6' | 'both';

const TOTAL_STEPS = 4;

export default function OnboardingScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const { setLanguage, setTMModel, completeOnboarding } = useSettingsStore();

  const deviceLocale = getLocales()[0]?.languageCode ?? 'en';
  const deviceLang: Language = deviceLocale === 'es' ? 'es' : 'en';
  const [selectedLang, setSelectedLang] = useState<Language>(deviceLang);
  const [selectedModel, setSelectedModel] = useState<TMModel>('both');
  const [currentStep, setCurrentStep] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  const handleLanguageSelect = useCallback(
    (lang: Language) => {
      setSelectedLang(lang);
      setLanguage(lang);
    },
    [setLanguage],
  );

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS - 1) {
      scrollViewRef.current?.scrollTo({ x: width * (currentStep + 1), animated: true });
    } else {
      setTMModel(selectedModel);
      completeOnboarding();
      router.replace('/(tabs)');
    }
  }, [currentStep, selectedModel, setTMModel, completeOnboarding, width]);

  const handleSkip = useCallback(() => {
    setLanguage(deviceLang);
    setTMModel('both');
    completeOnboarding();
    router.replace('/(tabs)');
  }, [deviceLang, setLanguage, setTMModel, completeOnboarding]);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const step = Math.round(offsetX / width);
      if (step !== currentStep && step >= 0 && step < TOTAL_STEPS) {
        setCurrentStep(step);
      }
    },
    [width, currentStep],
  );

  // --- Step content renderers ---

  const renderStep1 = () => (
    <View style={[styles.stepContainer, { width }]}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <WelcomeIlus width={180} height={180} />
        </View>
        <Text variant="h1" style={styles.title}>{t('onboarding.welcome')}</Text>
        <Text variant="body" color={theme.text.secondary} style={styles.subtitle}>
          {t('onboarding.welcomeSub')}
        </Text>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={[styles.stepContainer, { width }]}>
      <View style={styles.content}>
        <View style={styles.featureList}>
          {[
            { key: 'free', icon: <Gift size={24} color={theme.accent} />, title: t('onboarding.featureFreeTitle'), sub: t('onboarding.featureFreeSub') },
            { key: 'bilingual', icon: <Globe size={24} color={theme.accent} />, title: t('onboarding.featureBilingualTitle'), sub: t('onboarding.featureBilingualSub') },
            { key: 'tm', icon: <Cpu size={24} color={theme.accent} />, title: t('onboarding.featureTMTitle'), sub: t('onboarding.featureTMSub') },
          ].map((feature) => (
            <View
              key={feature.key}
              style={[styles.featureCard, { backgroundColor: theme.background.card }]}
            >
              <View style={styles.featureIcon}>{feature.icon}</View>
              <View style={styles.featureText}>
                <Text variant="h3">{feature.title}</Text>
                <Text variant="bodySmall" color={theme.text.secondary}>
                  {feature.sub}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={[styles.stepContainer, { width }]}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <LanguageIlus width={140} height={140} />
        </View>
        <Text variant="h2" style={styles.title}>{t('onboarding.languageQuestion')}</Text>
        <View style={[styles.optionsGroup, { backgroundColor: theme.background.card }]}>
          <LanguageOption
            flag="🇪🇸"
            label="Español"
            selected={selectedLang === 'es'}
            onPress={() => handleLanguageSelect('es')}
            theme={theme}
          />
          <View style={[styles.optionSeparator, { backgroundColor: theme.border }]} />
          <LanguageOption
            flag="🇬🇧"
            label="English"
            selected={selectedLang === 'en'}
            onPress={() => handleLanguageSelect('en')}
            theme={theme}
          />
        </View>
      </View>
    </View>
  );

  const renderStep4 = () => (
    <View style={[styles.stepContainer, { width }]}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <ModelIlus width={140} height={140} />
        </View>
        <Text variant="h2" style={styles.title}>{t('onboarding.modelQuestion')}</Text>
        <Text variant="bodySmall" color={theme.text.secondary} style={styles.subtitle}>
          {t('onboarding.modelHint')}
        </Text>
        <View style={[styles.optionsGroup, { backgroundColor: theme.background.card }]}>
          {(['tm5', 'tm6', 'both'] as const).map((model, index) => (
            <React.Fragment key={model}>
              {index > 0 && (
                <View style={[styles.optionSeparator, { backgroundColor: theme.border }]} />
              )}
              <ModelOption
                label={model === 'both' ? t('onboarding.modelBoth') : `Thermomix ${model.toUpperCase()}`}
                selected={selectedModel === model}
                onPress={() => setSelectedModel(model)}
                theme={theme}
              />
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background.primary }]}>
      {/* Skip button */}
      <Pressable
        onPress={handleSkip}
        style={styles.skipButton}
        accessibilityLabel={t('common.skip')}
        accessibilityRole="button"
      >
        <Text variant="bodySmall" color={theme.text.tertiary}>
          {t('common.skip')}
        </Text>
      </Pressable>

      {/* Pages */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.pager}
      >
        {renderStep1()}
        {renderStep2()}
        {renderStep3()}
        {renderStep4()}
      </ScrollView>

      {/* Dots */}
      <View style={styles.dotsRow}>
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === currentStep ? theme.accent : theme.border,
                width: i === currentStep ? 12 : 8,
              },
            ]}
            accessibilityElementsHidden
          />
        ))}
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button
          title={currentStep === TOTAL_STEPS - 1 ? t('onboarding.getStarted') : t('common.next')}
          onPress={handleNext}
          size="lg"
        />
      </View>
    </SafeAreaView>
  );
}

// --- Sub-components ---

function LanguageOption({
  flag,
  label,
  selected,
  onPress,
  theme,
}: {
  flag: string;
  label: string;
  selected: boolean;
  onPress: () => void;
  theme: ReturnType<typeof useTheme>['theme'];
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="radio"
      accessibilityLabel={`${flag} ${label}`}
      accessibilityState={{ selected }}
      style={[
        styles.optionRow,
        selected && { borderLeftColor: theme.accent, borderLeftWidth: 3 },
      ]}
    >
      <Text style={styles.optionFlag}>{flag}</Text>
      <Text variant="body" style={styles.optionLabel}>{label}</Text>
      {selected && <Check size={20} color={theme.accent} />}
    </TouchableOpacity>
  );
}

function ModelOption({
  label,
  selected,
  onPress,
  theme,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
  theme: ReturnType<typeof useTheme>['theme'];
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="radio"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
      style={[
        styles.optionRow,
        selected && { borderLeftColor: theme.accent, borderLeftWidth: 3 },
      ]}
    >
      <Text variant="body" style={styles.optionLabel}>{label}</Text>
      {selected && <Check size={20} color={theme.accent} />}
    </TouchableOpacity>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  skipButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  pager: {
    flex: 1,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  content: {
    alignItems: 'center',
  },
  illustration: {
    marginBottom: spacing.xl,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    textAlign: 'center',
  },
  // Features (step 2)
  featureList: {
    width: '100%',
    gap: spacing.sm,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    gap: spacing.md,
  },
  featureIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    flex: 1,
    gap: 2,
  },
  // Options (steps 3-4)
  optionsGroup: {
    width: '100%',
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginTop: spacing.lg,
  },
  optionRow: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  optionFlag: {
    fontSize: 20,
    lineHeight: 28,
    marginRight: spacing.sm,
  },
  optionLabel: {
    flex: 1,
  },
  optionSeparator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: spacing.md,
  },
  // Dots
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingVertical: spacing.lg,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  // Button
  buttonContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
