import React, { useCallback, useMemo } from 'react';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react-native';

import { Text, RecipeCard } from '@/components/ui';
import { EmptyState } from '@/components/layout';
import { useTheme, spacing } from '@/theme';
import EmptyCategoryIlus from '../../../assets/illustrations/ilus-empty-category.svg';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { categories } from '@/data/categories';
import type { Recipe } from '@/types';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en';

  const recipes = useRecipeStore((s) => s.recipes);
  const { favoriteIds, addFavorite, removeFavorite } = useFavoritesStore();

  const category = categories.find((c) => c.id === id);
  const filteredRecipes = useMemo(
    () => recipes.filter((r) => r.category === id),
    [recipes, id],
  );

  const isFavorite = useCallback(
    (recipeId: string) => favoriteIds.includes(recipeId),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    (recipeId: string) => {
      if (favoriteIds.includes(recipeId)) {
        removeFavorite(recipeId);
      } else {
        addFavorite(recipeId);
      }
    },
    [favoriteIds, addFavorite, removeFavorite],
  );

  const renderRecipe = useCallback(
    ({ item }: { item: Recipe }) => (
      <View style={styles.cardContainer}>
        <RecipeCard
          recipe={item}
          onPress={() => router.push(`/recipe/${item.id}`)}
          onFavoritePress={() => toggleFavorite(item.id)}
          isFavorite={isFavorite(item.id)}
        />
      </View>
    ),
    [toggleFavorite, isFavorite],
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background.primary }]}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          hitSlop={12}
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={theme.text.primary} />
        </Pressable>

        <Text variant="h2" style={styles.headerTitle} numberOfLines={1}>
          {category?.name[lang] ?? id}
        </Text>

        <Text variant="caption" color={theme.text.tertiary} style={styles.headerCount}>
          {t('explore.recipeCount', { count: filteredRecipes.length })}
        </Text>
      </View>

      {/* Recipe list */}
      {filteredRecipes.length === 0 ? (
        <EmptyState
          illustration={<EmptyCategoryIlus width={140} height={140} />}
          title={t('explore.emptyTitle')}
          message={t('explore.emptyMessage')}
          actionLabel={t('explore.emptyAction')}
          onAction={() => router.back()}
        />
      ) : (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipe}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {
    padding: spacing.xs,
  },
  headerTitle: {
    flex: 1,
    marginHorizontal: spacing.sm,
  },
  headerCount: {
    marginLeft: spacing.sm,
  },
  listContent: {
    padding: spacing.md,
    gap: spacing.md,
  },
  cardContainer: {
    // needed for gap to work in FlatList
  },
});
