import React, { useCallback, useMemo } from 'react';
import { FlatList, Pressable, View, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { Text, Input } from '@/components/ui';
import { SectionHeader } from '@/components/layout';
import { useTheme, spacing, radius, shadows } from '@/theme';
import { useRecipeStore } from '@/store/useRecipeStore';
import { categories } from '@/data/categories';
import type { Category } from '@/types';

export default function ExploreScreen() {
  const { t, i18n } = useTranslation();
  const { theme, isDark } = useTheme();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const recipes = useRecipeStore((s) => s.recipes);
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en';

  const cardSize = (width - spacing.md * 3) / 2;

  const categoriesWithCount = useMemo(
    () =>
      categories.map((cat) => ({
        ...cat,
        count: recipes.filter((r) => r.category === cat.id).length,
      })),
    [recipes],
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

  const renderCategory = useCallback(
    ({ item }: { item: Category & { count: number } }) => (
      <Pressable
        onPress={() => handleCategoryPress(item.id)}
        accessibilityRole="button"
        accessibilityLabel={`${item.name[lang]}, ${t('explore.recipeCount', { count: item.count })}`}
        style={({ pressed }) => [
          styles.categoryCard,
          {
            width: cardSize,
            height: cardSize,
            backgroundColor: isDark ? item.colorDark : item.color,
          },
          pressed && styles.categoryPressed,
        ]}
      >
        <Text style={styles.categoryIcon}>{item.icon}</Text>
        <Text variant="h3" style={styles.categoryName}>
          {item.name[lang]}
        </Text>
        <Text variant="caption" color={theme.text.secondary}>
          {t('explore.recipeCount', { count: item.count })}
        </Text>
      </Pressable>
    ),
    [handleCategoryPress, lang, t, cardSize, isDark, theme.text.secondary],
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      <Text variant="h1" style={styles.header}>
        {t('explore.title')}
      </Text>

      <Pressable onPress={handleSearchPress} style={styles.searchContainer}>
        <View pointerEvents="none">
          <Input
            placeholder={t('common.search')}
            editable={false}
            leftIcon={<Text style={styles.searchIcon}>🔍</Text>}
          />
        </View>
      </Pressable>

      <FlatList
        data={categoriesWithCount}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <SectionHeader title={t('explore.categories')} />
        }
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
    paddingBottom: spacing.sm,
  },
  searchContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  searchIcon: {
    fontSize: 16,
  },
  gridContent: {
    paddingBottom: spacing['2xl'],
  },
  row: {
    paddingHorizontal: spacing.md,
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  categoryCard: {
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    ...shadows.sm,
  },
  categoryPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  categoryIcon: {
    fontSize: 40,
    lineHeight: 56,
    textAlign: 'center',
  },
  categoryName: {
    textAlign: 'center',
  },
});
