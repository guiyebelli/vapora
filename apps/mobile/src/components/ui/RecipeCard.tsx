import React, { useMemo, useCallback } from 'react';
import { Pressable, View, StyleSheet, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react-native';
import { spacing, radius, shadows, colors, useTheme } from '@/theme';
import { Text } from './Text';
import type { Recipe } from '@/types';
import { categories } from '@/data/categories';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  onFavoritePress: () => void;
  isFavorite: boolean;
}

function getCategoryInfo(categoryId: string) {
  return categories.find((c) => c.id === categoryId);
}

function getDifficultyLabel(difficulty: Recipe['difficulty']): string {
  const map: Record<Recipe['difficulty'], string> = {
    easy: 'Fácil',
    medium: 'Media',
    hard: 'Difícil',
  };
  return map[difficulty];
}

export function RecipeCard({
  recipe,
  onPress,
  onFavoritePress,
  isFavorite,
}: RecipeCardProps) {
  const { theme, isDark } = useTheme();
  const { t } = useTranslation();
  const category = getCategoryInfo(recipe.category);
  const placeholderBg = isDark ? category?.colorDark : category?.color;
  const scaleAnim = useMemo(() => new Animated.Value(1), []);

  const handleFavoritePress = useCallback(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
    onFavoritePress();
  }, [onFavoritePress, scaleAnim]);

  return (
    <View style={[styles.shadowWrapper, { backgroundColor: theme.background.card }]}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={recipe.title.es}
        style={({ pressed }) => [
          styles.container,
          { backgroundColor: theme.background.card },
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.imagePlaceholder,
            { backgroundColor: placeholderBg ?? theme.background.secondary },
          ]}
        >
          <Text style={styles.emoji}>{category?.icon ?? '🍽️'}</Text>
        </View>

        <View style={styles.content}>
          <Text variant="h3" numberOfLines={2} style={styles.title}>
            {recipe.title.es}
          </Text>

          <Text variant="caption" color={theme.text.secondary}>
            {recipe.totalTime} min · {getDifficultyLabel(recipe.difficulty)}
          </Text>
        </View>

        <Pressable
          onPress={handleFavoritePress}
          accessibilityRole="button"
          accessibilityLabel={
            isFavorite ? t('recipe.removeFavorite') : t('recipe.addFavorite')
          }
          hitSlop={8}
          style={[styles.favoriteButton, { backgroundColor: theme.background.primary + 'CC' }]}
        >
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Heart
              size={20}
              color={isFavorite ? colors.primary[500] : theme.text.tertiary}
              fill={isFavorite ? colors.primary[500] : 'none'}
            />
          </Animated.View>
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: radius.xl,
    ...shadows.md,
  },
  container: {
    borderRadius: radius.xl,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.85,
  },
  imagePlaceholder: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 48,
    lineHeight: 64,
    textAlign: 'center',
  },
  content: {
    padding: spacing.md,
    gap: spacing.xs,
  },
  title: {
    flex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.full,
  },
});
