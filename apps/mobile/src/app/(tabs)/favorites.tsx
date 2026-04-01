import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import {
  FlatList,
  View,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { Text, RecipeCard, SelectorSheet } from '@/components/ui';
import { EmptyState } from '@/components/layout';
import { useTheme, spacing, radius, colors } from '@/theme';
import EmptyFavoritesIlus from '../../../assets/illustrations/ilus-empty-favorites.svg';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import type { Recipe } from '@/types';

type SortOption = 'recent' | 'nameAZ' | 'nameZA';

export default function FavoritesScreen() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en';

  const recipes = useRecipeStore((s) => s.recipes);
  const { favoriteIds, addFavorite, removeFavorite } = useFavoritesStore();

  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [showSortSheet, setShowSortSheet] = useState(false);

  // Toast state
  const [toast, setToast] = useState<{ recipeId: string; recipeName: string } | null>(null);
  const toastOpacity = useMemo(() => new Animated.Value(0), []);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const favoriteRecipes = useMemo(() => {
    const favs = recipes.filter((r) => favoriteIds.includes(r.id));

    // Sort by favoriteIds order (most recent first) by default
    const ordered = favoriteIds
      .map((id) => favs.find((r) => r.id === id))
      .filter(Boolean) as Recipe[];

    switch (sortBy) {
      case 'nameAZ':
        return [...ordered].sort((a, b) => a.title[lang].localeCompare(b.title[lang]));
      case 'nameZA':
        return [...ordered].sort((a, b) => b.title[lang].localeCompare(a.title[lang]));
      default:
        return ordered.reverse(); // most recent added first
    }
  }, [recipes, favoriteIds, sortBy, lang]);

  const showToast = useCallback(
    (recipeId: string, recipeName: string) => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
      setToast({ recipeId, recipeName });
      Animated.timing(toastOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      toastTimer.current = setTimeout(() => {
        Animated.timing(toastOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => setToast(null));
      }, 3000);
    },
    [toastOpacity],
  );

  const handleUndo = useCallback(() => {
    if (!toast) return;
    addFavorite(toast.recipeId);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    Animated.timing(toastOpacity, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => setToast(null));
  }, [toast, addFavorite, toastOpacity]);

  const handleRemoveFavorite = useCallback(
    (recipeId: string) => {
      const recipe = recipes.find((r) => r.id === recipeId);
      removeFavorite(recipeId);
      showToast(recipeId, recipe?.title[lang] ?? '');
    },
    [removeFavorite, recipes, lang, showToast],
  );

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const sortLabel = {
    recent: t('favorites.sortRecent'),
    nameAZ: t('favorites.sortNameAZ'),
    nameZA: t('favorites.sortNameZA'),
  }[sortBy];

  const sortOptions = [
    { value: 'recent' as const, label: t('favorites.sortRecent') },
    { value: 'nameAZ' as const, label: t('favorites.sortNameAZ') },
    { value: 'nameZA' as const, label: t('favorites.sortNameZA') },
  ];

  const renderRecipe = useCallback(
    ({ item }: { item: Recipe }) => (
      <View style={styles.cardContainer}>
        <RecipeCard
          recipe={item}
          onPress={() => router.push(`/recipe/${item.id}`)}
          onFavoritePress={() => handleRemoveFavorite(item.id)}
          isFavorite={true}
        />
      </View>
    ),
    [router, handleRemoveFavorite],
  );

  if (favoriteRecipes.length === 0 && !toast) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
        edges={['top']}
      >
        <Text variant="h1" style={styles.header} accessibilityRole="header">
          {t('favorites.title')}
        </Text>
        <EmptyState
          illustration={<EmptyFavoritesIlus width={160} height={160} />}
          title={t('favorites.empty')}
          message={t('favorites.emptyHint')}
          actionLabel={t('favorites.explore')}
          onAction={() => router.push('/(tabs)/explore')}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      <Text variant="h1" style={styles.header}>
        {t('favorites.title')}
      </Text>

      {/* Sort + Count */}
      <View style={styles.sortRow}>
        <Pressable
          onPress={() => setShowSortSheet(true)}
          accessibilityRole="combobox"
          style={styles.sortButton}
        >
          <Text variant="bodySmall" color={theme.text.secondary}>
            {t('explore.sortBy')}: {' '}
          </Text>
          <Text variant="bodySmall" color={theme.text.primary}>
            {sortLabel} ▾
          </Text>
        </Pressable>
        <Text variant="caption" color={theme.text.tertiary}>
          {t('explore.recipeCount', { count: favoriteRecipes.length })}
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Toast */}
      {toast && (
        <Animated.View
          style={[
            styles.toast,
            { backgroundColor: theme.text.primary, opacity: toastOpacity },
          ]}
          accessibilityLiveRegion="polite"
        >
          <Text variant="bodySmall" color={theme.text.inverse} style={styles.toastText}>
            {t('favorites.removed')}
          </Text>
          <Pressable onPress={handleUndo} hitSlop={8}>
            <Text variant="bodySmall" color={colors.primary[400]} style={styles.toastAction}>
              {t('common.undo')}
            </Text>
          </Pressable>
        </Animated.View>
      )}

      {/* Sort Sheet */}
      <SelectorSheet
        visible={showSortSheet}
        title={t('explore.sortBy')}
        options={sortOptions}
        selected={sortBy}
        onSelect={setSortBy}
        onClose={() => setShowSortSheet(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.xs,
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    padding: spacing.md,
    gap: spacing.md,
  },
  cardContainer: {},
  toast: {
    position: 'absolute',
    bottom: spacing.md + 16, // above safe area
    left: spacing.md,
    right: spacing.md,
    height: 48,
    borderRadius: radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  toastText: {
    flex: 1,
  },
  toastAction: {
    fontWeight: '600',
  },
});
