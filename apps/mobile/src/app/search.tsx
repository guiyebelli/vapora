import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
  FlatList,
  View,
  Pressable,
  TextInput,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Search, X, Clock } from 'lucide-react-native';

import { Text, RecipeCard, Chip } from '@/components/ui';
import { SectionHeader, EmptyState } from '@/components/layout';
import { useTheme, spacing, radius, fontFamily } from '@/theme';
import EmptySearchIlus from '../../assets/illustrations/ilus-empty-search.svg';
import { useRecipeStore } from '@/store/useRecipeStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useSearchStore } from '@/store/useSearchStore';
import type { Recipe } from '@/types';

const DEBOUNCE_MS = 300;

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

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(
    () => searchRecipes(recipes, debouncedQuery, lang),
    [recipes, debouncedQuery, lang],
  );

  const hasQuery = debouncedQuery.trim().length > 0;

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
    >
      {/* Search bar + Cancel */}
      <View style={styles.searchRow}>
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: theme.background.secondary,
              borderColor: inputFocused ? theme.accent : theme.border,
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

      {/* Content */}
      {hasQuery ? (
        <>
          {/* Results header */}
          <View style={styles.resultsHeader}>
            <Text variant="bodySmall" color={theme.text.secondary}>
              {t('search.results', { count: results.length })}
            </Text>
          </View>

          {results.length === 0 ? (
            <EmptyState
              illustration={<EmptySearchIlus width={140} height={140} />}
              title={t('search.noResults', { query: debouncedQuery })}
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
        /* Recents + Suggestions */
        <FlatList
          data={[]}
          renderItem={null}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              {/* Recent searches */}
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

              {/* Suggestion chips */}
              <View style={styles.section}>
                <SectionHeader title={t('search.suggestions')} />
                <View style={styles.chipRow}>
                  <Chip label={t('search.chipQuick')} onPress={() => handleRecentPress(t('search.chipQuick'))} />
                  <Chip label={t('search.chipEasy')} onPress={() => handleRecentPress(t('search.chipEasy'))} />
                  <Chip label={t('search.chipNoOven')} onPress={() => handleRecentPress(t('search.chipNoOven'))} />
                  <Chip label={t('search.chipVegan')} onPress={() => handleRecentPress(t('search.chipVegan'))} />
                  <Chip label={t('search.chipKids')} onPress={() => handleRecentPress(t('search.chipKids'))} />
                </View>
              </View>
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
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
  },
});
