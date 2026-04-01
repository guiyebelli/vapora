import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, Heart, Share2, Clock, Star, Users } from 'lucide-react-native';

import { Text, Chip } from '@/components/ui';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useTheme, spacing, radius, colors } from '@/theme';
import { categories } from '@/data/categories';
import type { ThermomixSettings } from '@/types/recipe';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { theme, isDark } = useTheme();
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en';

  const recipe = useRecipeStore((s) => s.getRecipeById)(id ?? '');
  const isFavorite = useFavoritesStore((s) => s.isFavorite)(id ?? '');
  const addFavorite = useFavoritesStore((s) => s.addFavorite);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);

  const category = categories.find((c) => c.id === recipe?.category);

  const handleToggleFavorite = () => {
    if (!id) return;
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const handleShare = async () => {
    if (!recipe) return;
    try {
      await Share.share({
        message: `${recipe.title[lang]} - Vapora`,
      });
    } catch {
      // User cancelled or error
    }
  };

  if (!recipe) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.background.primary }]}
      >
        <View style={styles.centered}>
          <Text variant="body" color={theme.text.secondary}>
            {t('common.error')}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const formatSpeed = (speed: ThermomixSettings['speed']): string => {
    if (speed === 'turbo') return t('tm.turbo');
    if (speed === 'spatula') return t('tm.spatula');
    return t('tm.speed', { value: speed });
  };

  const formatTemperature = (
    temp: ThermomixSettings['temperature'],
  ): string => {
    if (temp === 'varoma') return t('tm.temperatureVaroma');
    return t('tm.temperature', { value: temp });
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      {/* Header bar */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          hitSlop={12}
          style={styles.headerButton}
        >
          <ChevronLeft size={24} color={theme.text.primary} />
        </Pressable>

        <View style={styles.headerTitleContainer}>
          <Text
            variant="bodySmall"
            color={theme.text.primary}
            numberOfLines={1}
            style={styles.headerTitle}
          >
            {recipe.title[lang]}
          </Text>
        </View>

        <Pressable
          onPress={handleToggleFavorite}
          accessibilityRole="button"
          accessibilityLabel={
            isFavorite ? t('recipe.removeFavorite') : t('recipe.addFavorite')
          }
          hitSlop={12}
          style={styles.headerButton}
        >
          <Heart
            size={22}
            color={isFavorite ? colors.semantic.error : theme.text.secondary}
            fill={isFavorite ? colors.semantic.error : 'transparent'}
          />
        </Pressable>

        <Pressable
          onPress={handleShare}
          accessibilityRole="button"
          accessibilityLabel={t('recipe.share')}
          hitSlop={12}
          style={styles.headerButton}
        >
          <Share2 size={22} color={theme.text.secondary} />
        </Pressable>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero image area */}
        <View
          style={[
            styles.hero,
            { backgroundColor: (isDark ? category?.colorDark : category?.color) ?? theme.background.secondary },
          ]}
        >
          <Text style={styles.heroEmoji}>{category?.icon ?? '🍽️'}</Text>
        </View>

        {/* Title */}
        <View style={styles.section}>
          <Text variant="h1" color={theme.text.primary}>
            {recipe.title[lang]}
          </Text>
        </View>

        {/* Metadata row */}
        <View style={styles.metadataRow}>
          <Chip
            leftIcon={<Clock size={14} color={theme.text.secondary} />}
            label={t('recipe.minutes', { count: recipe.totalTime })}
          />
          <Chip
            leftIcon={<Star size={14} color={theme.text.secondary} />}
            label={t(`difficulty.${recipe.difficulty}`)}
          />
          <Chip
            leftIcon={<Users size={14} color={theme.text.secondary} />}
            label={t('recipe.servings', { count: recipe.servings })}
          />
          {recipe.thermomixModel.map((model) => (
            <Chip key={model} label={model} variant="category" />
          ))}
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text variant="body" color={theme.text.secondary}>
            {recipe.description[lang]}
          </Text>
        </View>

        {/* Ingredients section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Text variant="h2" color={theme.text.primary}>
              {t('recipe.ingredients')}
            </Text>
            <Text variant="bodySmall" color={theme.text.secondary}>
              {t('recipe.servings', { count: recipe.servings })}
            </Text>
          </View>

          {recipe.ingredients.map((ingredient) => (
            <View key={ingredient.id} style={[styles.ingredientRow, { borderBottomColor: theme.border }]}>
              <Text variant="body" color={theme.text.primary}>
                <Text variant="body" color={theme.text.primary} style={styles.bold}>
                  {ingredient.amount} {ingredient.unit}
                </Text>
                {'  '}
                {ingredient.name[lang]}
                {ingredient.optional ? (
                  <Text variant="bodySmall" color={theme.text.tertiary}>
                    {' '}
                    {t('recipe.optional')}
                  </Text>
                ) : null}
              </Text>
            </View>
          ))}
        </View>

        {/* Steps section */}
        <View style={styles.section}>
          <Text variant="h2" color={theme.text.primary}>
            {t('recipe.instructions')}
          </Text>

          {recipe.steps
            .sort((a, b) => a.order - b.order)
            .map((step) => (
              <View
                key={step.id}
                style={[
                  styles.stepCard,
                  { backgroundColor: theme.background.secondary },
                ]}
              >
                <Text variant="h2" color={theme.accent}>
                  {step.order}
                </Text>
                <Text
                  variant="body"
                  color={theme.text.primary}
                  style={styles.stepInstruction}
                >
                  {step.instruction[lang]}
                </Text>

                {step.thermomixSettings && (
                  <View
                    style={[
                      styles.tmSettingsRow,
                      { backgroundColor: theme.accentLight },
                    ]}
                  >
                    {step.thermomixSettings.speed != null && (
                      <Chip
                        label={formatSpeed(step.thermomixSettings.speed)}
                        variant="category"
                      />
                    )}
                    {step.thermomixSettings.temperature != null && (
                      <Chip
                        label={formatTemperature(
                          step.thermomixSettings.temperature,
                        )}
                        variant="category"
                      />
                    )}
                    {step.thermomixSettings.time != null && (
                      <Chip
                        label={t('recipe.minutes', {
                          count: step.thermomixSettings.time,
                        })}
                        variant="category"
                      />
                    )}
                  </View>
                )}

                {step.tip && (
                  <Text
                    variant="bodySmall"
                    color={theme.text.secondary}
                    style={styles.stepTip}
                  >
                    {t('recipe.tip')}: {step.tip[lang]}
                  </Text>
                )}
              </View>
            ))}
        </View>

        {/* Tips */}
        {recipe.tips && (
          <View
            style={[styles.tipsCard, { backgroundColor: theme.accentLight }]}
          >
            <Text variant="h3" color={theme.accent}>
              {t('recipe.tip')}
            </Text>
            <Text
              variant="body"
              color={theme.text.primary}
              style={styles.tipsText}
            >
              {recipe.tips[lang]}
            </Text>
          </View>
        )}
      </ScrollView>
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
  headerButton: {
    padding: spacing.xs,
  },
  headerTitleContainer: {
    flex: 1,
    marginHorizontal: spacing.sm,
  },
  headerTitle: {
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing['2xl'],
  },
  hero: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroEmoji: {
    fontSize: 72,
    lineHeight: 96,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  metadataRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  ingredientRow: {
    paddingVertical: spacing.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bold: {
    fontWeight: '700',
  },
  stepCard: {
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
  },
  stepInstruction: {
    marginTop: spacing.sm,
  },
  tmSettingsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.sm,
    padding: spacing.sm,
    borderRadius: radius.md,
  },
  stepTip: {
    marginTop: spacing.sm,
    fontStyle: 'italic',
  },
  tipsCard: {
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    padding: spacing.md,
    borderRadius: radius.lg,
  },
  tipsText: {
    marginTop: spacing.sm,
  },
});
