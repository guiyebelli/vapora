import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
  FlatList,
  View,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Search, X, Clock, SlidersHorizontal } from 'lucide-react-native';

import { Text, RecipeCard, Chip } from '@/components/ui';
import { SectionHeader, EmptyState } from '@/components/layout';
import { useTheme, spacing, radius, fontFamily } from '@/theme';
import EmptySearchIlus from '../../assets/illustrations/ilus-empty-search.svg';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useSearchStore } from '@/store/useSearchStore';
import { categories } from '@/data/categories';
import type { Recipe, CategoryId } from '@/types';

const DEBOUNCE_MS = 300;

const DIFFICULTY_OPTIONS = ['easy', 'medium', 'hard'] as const;
const TIME_OPTIONS = [15, 30, 60, 120] as const;

function searchRecipes(recipes: Recipe[], query: string, lang: 'es' | 'en'): Recipe[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return recipes
    .map((recipe) => {
      let score = 0;
      const title = recipe.title[lang].toLowerCase();
      const desc = recipe.description[lang].toLowerCase();

      if (title === q) score = 100;
      else if (title.startsWith(q)) score = 80;
      else if (title.includes(q)) score = 60;

      recipe.ingredients.forEach((ing) => {
        if (ing.name[lang].toLowerCase().includes(q)) score = Math.max(score, 40);
      });

      if (desc.includes(q)) score = Math.max(score, 20);

      if (recipe.tags?.some((tag) => tag.toLowerCase().includes(q))) {
        score = Math.max(score, 30);
      }

      return { recipe, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.recipe);
}

function applyFilters(
  recipes: Recipe[],
  filters: {
    category: CategoryId | null;
    difficulty: Recipe['difficulty'] | null;
    maxTime: number | null;
  },
): Recipe[] {
  return recipes.filter((recipe) => {
    if (filters.category && recipe.category !== filters.category) return false;
    if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
    if (filters.maxTime && recipe.totalTime > filters.maxTime) return false;
    return true;
  });
}

export default function SearchScreen() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en';

  const recipes = useRecipeStore((s) => s.recipes);
  const { favoriteIds, addFavorite, removeFavorite } = useFavoritesStore();
  const { recentSearches, addRecent, removeRecent } = useSearchStore();

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [inputFocused, setInputFocused] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Filters state
  const [filterCategory, setFilterCategory] = useState<CategoryId | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<Recipe['difficulty'] | null>(null);
  const [filterMaxTime, setFilterMaxTime] = useState<number | null>(null);

  const activeFilterCount = [filterCategory, filterDifficulty, filterMaxTime].filter(Boolean).length;

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    const filters = { category: filterCategory, difficulty: filterDifficulty, maxTime: filterMaxTime };
    const hasFilters = activeFilterCount > 0;
    const hasQuery = debouncedQuery.trim().length > 0;

    if (hasQuery) {
      const searched = searchRecipes(recipes, debouncedQuery, lang);
      return hasFilters ? applyFilters(searched, filters) : searched;
    }

    if (hasFilters) {
      return applyFilters(recipes, filters);
    }

    return [];
  }, [recipes, debouncedQuery, lang, filterCategory, filterDifficulty, filterMaxTime, activeFilterCount]);

  const hasQuery = debouncedQuery.trim().length > 0;
  const hasFilters = activeFilterCount > 0;
  const showResults = hasQuery || hasFilters;

  const handleRecipePress = useCallback(
    (id: string) => {
      if (query.trim()) addRecent(query.trim());
      router.push(`/recipe/${id}`);
    },
    [query, addRecent],
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      if (favoriteIds.includes(id)) removeFavorite(id);
      else addFavorite(id);
    },
    [favoriteIds, addFavorite, removeFavorite],
  );

  const handleRecentPress = useCallback((term: string) => {
    setQuery(term);
    setDebouncedQuery(term);
  }, []);

  const handleCancel = useCallback(() => {
    Keyboard.dismiss();
    router.back();
  }, []);

  const clearFilters = useCallback(() => {
    setFilterCategory(null);
    setFilterDifficulty(null);
    setFilterMaxTime(null);
  }, []);

  const difficultyLabel = (d: string) => {
    const map: Record<string, string> = { easy: t('difficulty.easy'), medium: t('difficulty.medium'), hard: t('difficulty.hard') };
    return map[d] ?? d;
  };

  const renderRecipe = useCallback(
    ({ item }: { item: Recipe }) => (
      <View style={styles.cardContainer}>
        <RecipeCard
          recipe={item}
          onPress={() => handleRecipePress(item.id)}
          onFavoritePress={() => toggleFavorite(item.id)}
          isFavorite={favoriteIds.includes(item.id)}
        />
      </View>
    ),
    [handleRecipePress, toggleFavorite, favoriteIds],
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      {/* Search bar + Cancel */}
      <View style={styles.searchRow}>
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: theme.glass.input,
              borderColor: inputFocused ? theme.accent : theme.glass.border,
            },
          ]}
        >
          <Search size={20} color={theme.text.tertiary} />
          <TextInput
            autoFocus
            value={query}
            onChangeText={setQuery}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder={t('search.placeholder')}
            placeholderTextColor={theme.text.tertiary}
            style={[styles.input, { color: theme.text.primary }]}
            returnKeyType="search"
            accessibilityRole="search"
            accessibilityLabel={t('search.placeholder')}
          />
          {query.length > 0 && (
            <Pressable
              onPress={() => { setQuery(''); setDebouncedQuery(''); }}
              hitSlop={8}
              accessibilityLabel={t('common.delete')}
            >
              <X size={18} color={theme.text.tertiary} />
            </Pressable>
          )}
        </View>

        <Pressable onPress={handleCancel} style={styles.cancelButton} accessibilityRole="button" accessibilityLabel={t('common.cancel')}>
          <Text variant="body" color={theme.accent}>
            {t('search.cancel')}
          </Text>
        </Pressable>
      </View>

      {/* Filter toggle */}
      <View style={styles.filterToggleRow}>
        <Pressable
          onPress={() => setShowFilters(!showFilters)}
          style={[styles.filterToggle, { backgroundColor: showFilters || hasFilters ? theme.accent : theme.background.card }]}
          accessibilityRole="button"
          accessibilityLabel={t('search.filters')}
        >
          <SlidersHorizontal size={16} color={showFilters || hasFilters ? theme.text.inverse : theme.text.secondary} />
          <Text variant="bodySmall" color={showFilters || hasFilters ? theme.text.inverse : theme.text.secondary}>
            {hasFilters ? t('search.activeFilters', { count: activeFilterCount }) : t('search.filters')}
          </Text>
        </Pressable>
        {hasFilters && (
          <Pressable onPress={clearFilters} accessibilityRole="button" accessibilityLabel={t('search.clearFilters')}>
            <Text variant="bodySmall" color={theme.accent}>{t('search.clearFilters')}</Text>
          </Pressable>
        )}
      </View>

      {/* Filter chips */}
      {showFilters && (
        <View style={styles.filtersContainer}>
          {/* Category */}
          <Text variant="caption" color={theme.text.tertiary} style={styles.filterLabel}>
            {t('search.filterCategory')}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterChipRow} contentContainerStyle={styles.filterChipContent}>
            {categories.map((cat) => (
              <Chip
                key={cat.id}
                label={cat.name[lang]}
                selected={filterCategory === cat.id}
                onPress={() => setFilterCategory(filterCategory === cat.id ? null : cat.id)}
              />
            ))}
          </ScrollView>

          {/* Difficulty */}
          <Text variant="caption" color={theme.text.tertiary} style={styles.filterLabel}>
            {t('search.filterDifficulty')}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterChipRow} contentContainerStyle={styles.filterChipContent}>
            {DIFFICULTY_OPTIONS.map((d) => (
              <Chip
                key={d}
                label={difficultyLabel(d)}
                selected={filterDifficulty === d}
                onPress={() => setFilterDifficulty(filterDifficulty === d ? null : d)}
              />
            ))}
          </ScrollView>

          {/* Time */}
          <Text variant="caption" color={theme.text.tertiary} style={styles.filterLabel}>
            {t('search.filterTime')}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterChipRow} contentContainerStyle={styles.filterChipContent}>
            {TIME_OPTIONS.map((mins) => (
              <Chip
                key={mins}
                label={t('search.filterTimeUpTo', { minutes: mins })}
                selected={filterMaxTime === mins}
                onPress={() => setFilterMaxTime(filterMaxTime === mins ? null : mins)}
              />
            ))}
          </ScrollView>
        </View>
      )}

      {/* Content */}
      {showResults ? (
        <>
          <View style={styles.resultsHeader}>
            <Text variant="bodySmall" color={theme.text.secondary}>
              {t('search.results', { count: results.length })}
            </Text>
          </View>

          {results.length === 0 ? (
            <EmptyState
              illustration={<EmptySearchIlus width={140} height={140} />}
              title={hasQuery ? t('search.noResults', { query: debouncedQuery }) : t('search.noResultsFilters')}
              message={t('search.noResultsHint')}
            />
          ) : (
            <FlatList
              data={results}
              keyExtractor={(item) => item.id}
              renderItem={renderRecipe}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
              keyboardDismissMode="on-drag"
            />
          )}
        </>
      ) : (
        <FlatList
          data={[]}
          renderItem={null}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              {recentSearches.length > 0 && (
                <View style={styles.section}>
                  <SectionHeader title={t('search.recent')} />
                  {recentSearches.map((term) => (
                    <Pressable
                      key={term}
                      onPress={() => handleRecentPress(term)}
                      style={[styles.recentItem, { borderBottomColor: theme.border }]}
                      accessibilityLabel={t('search.searchFor', { query: term })}
                    >
                      <Clock size={16} color={theme.text.tertiary} />
                      <Text variant="body" style={styles.recentText}>
                        {term}
                      </Text>
                      <Pressable
                        onPress={() => removeRecent(term)}
                        hitSlop={8}
                        accessibilityLabel={t('search.deleteRecent')}
                      >
                        <X size={16} color={theme.text.tertiary} />
                      </Pressable>
                    </Pressable>
                  ))}
                </View>
              )}

            </>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  inputContainer: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: fontFamily.body,
    fontSize: 16,
    padding: 0,
  },
  cancelButton: {
    paddingVertical: spacing.sm,
  },
  filterToggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  filterToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
  },
  filtersContainer: {
    paddingBottom: spacing.md,
  },
  filterLabel: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs,
  },
  filterChipRow: {
    flexDirection: 'row',
  },
  filterChipContent: {
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
  },
  resultsHeader: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  listContent: {
    padding: spacing.md,
    gap: spacing.md,
  },
  cardContainer: {},
  section: {
    marginBottom: spacing.md,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: spacing.sm,
  },
  recentText: {
    flex: 1,
  },
});
