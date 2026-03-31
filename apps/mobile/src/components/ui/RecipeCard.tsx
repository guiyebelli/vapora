import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { spacing, radius, shadows, useTheme } from '@/theme';
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
  const category = getCategoryInfo(recipe.category);
  const placeholderBg = isDark ? category?.colorDark : category?.color;

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
          onPress={onFavoritePress}
          accessibilityRole="button"
          accessibilityLabel={
            isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'
          }
          hitSlop={8}
          style={[styles.favoriteButton, { backgroundColor: theme.background.primary + 'CC' }]}
        >
          <Text style={styles.heart}>{isFavorite ? '❤️' : '🤍'}</Text>
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // Outer wrapper: handles shadow + borderRadius, no overflow clipping
  shadowWrapper: {
    borderRadius: radius.xl,
    ...shadows.md,
  },
  // Inner pressable: handles overflow clipping for borderRadius
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
  heart: {
    fontSize: 20,
  },
});
