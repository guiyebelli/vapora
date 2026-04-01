import React, { useCallback } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { Text, RecipeCard, Chip, Input, SectionHeader, AnimatedLogo } from '@/components';
import { Search as SearchIcon } from 'lucide-react-native';
import { useTheme, spacing } from '@/theme';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { categories } from '@/data/categories';
import type { Recipe, Category } from '@/types';

const FEATURED_COUNT = 5;
const CARD_WIDTH = 280;

export default function HomeScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();
  const recipes = useRecipeStore((s) => s.recipes);
  const { favoriteIds, addFavorite, removeFavorite } = useFavoritesStore();

  const featuredRecipes = recipes.slice(0, FEATURED_COUNT);
  const recentRecipes = recipes.slice(FEATURED_COUNT);

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      if (favoriteIds.includes(id)) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    },
    [favoriteIds, addFavorite, removeFavorite],
  );

  const handleRecipePress = useCallback(
    (id: string) => {
      router.push(`/recipe/${id}`);
    },
    [router],
  );

  const handleCategoryPress = useCallback(
    (id: string) => {
      router.push(`/category/${id}`);
    },
    [router],
  );

  const handleSearchPress = useCallback(() => {
    router.push('/search');
  }, [router]);

  const renderCategoryChip = useCallback(
    ({ item }: { item: Category }) => (
      <Chip
        label={item.name.es}
        variant="category"
        onPress={() => handleCategoryPress(item.id)}
      />
    ),
    [handleCategoryPress],
  );

  const renderFeaturedCard = useCallback(
    ({ item }: { item: Recipe }) => (
      <View style={styles.featuredCard}>
        <RecipeCard
          recipe={item}
          onPress={() => handleRecipePress(item.id)}
          onFavoritePress={() => toggleFavorite(item.id)}
          isFavorite={isFavorite(item.id)}
        />
      </View>
    ),
    [handleRecipePress, toggleFavorite, isFavorite],
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <AnimatedLogo size={32} />
          <Text variant="h1" color={theme.accent} accessibilityRole="header">
            Vapora
          </Text>
        </View>

        {/* Search bar (read-only, navigates to /search) */}
        <Pressable onPress={handleSearchPress} style={styles.searchContainer} accessibilityRole="button" accessibilityLabel={t('common.search')}>
          <View pointerEvents="none">
            <Input
              placeholder={t('common.search')}
              editable={false}
              leftIcon={<SearchIcon size={18} color={theme.text.tertiary} />}
            />
          </View>
        </Pressable>

        {/* Categories */}
        <SectionHeader title={t('home.categories')} />
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryChip}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipList}
          ItemSeparatorComponent={ChipSeparator}
        />

        {/* Featured */}
        <SectionHeader
          title={t('home.featured')}
          actionLabel={t('home.featuredSeeAll')}
          onAction={() => router.push('/search')}
        />
        <FlatList
          data={featuredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={renderFeaturedCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredList}
          ItemSeparatorComponent={CardSeparator}
        />

        {/* Recent */}
        <SectionHeader title={t('home.recent')} />
        {recentRecipes.map((recipe) => (
          <View key={recipe.id} style={styles.recentCard}>
            <RecipeCard
              recipe={recipe}
              onPress={() => handleRecipePress(recipe.id)}
              onFavoritePress={() => toggleFavorite(recipe.id)}
              isFavorite={isFavorite(recipe.id)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function ChipSeparator() {
  return <View style={styles.chipSeparator} />;
}

function CardSeparator() {
  return <View style={styles.cardSeparator} />;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing['2xl'],
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  searchContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  chipList: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  chipSeparator: {
    width: spacing.sm,
  },
  featuredList: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  featuredCard: {
    width: CARD_WIDTH,
    paddingBottom: spacing.xs,
  },
  cardSeparator: {
    width: spacing.md,
  },
  recentCard: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
});
