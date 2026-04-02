import React, { useState, useCallback, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

import { Text, Chip, TipCard } from '@/components';
import { useTheme, spacing } from '@/theme';
import { useTipStore } from '@/store/useTipStore';
import type { Tip, TipCategory } from '@/types';

const CATEGORIES: (TipCategory | 'all')[] = [
  'all',
  'usage',
  'cleaning',
  'maintenance',
  'safety',
  'hacks',
];

export default function TipsScreen() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const router = useRouter();
  const tips = useTipStore((s) => s.tips);
  const [selectedCategory, setSelectedCategory] = useState<TipCategory | 'all'>('all');

  const filteredTips = useMemo(
    () =>
      selectedCategory === 'all'
        ? tips
        : tips.filter((tip) => tip.category === selectedCategory),
    [tips, selectedCategory],
  );

  const handleTipPress = useCallback(
    (id: string) => {
      router.push(`/tip/${id}`);
    },
    [router],
  );

  const renderTip = useCallback(
    ({ item }: { item: Tip }) => (
      <View style={styles.tipItem}>
        <TipCard tip={item} onPress={() => handleTipPress(item.id)} />
      </View>
    ),
    [handleTipPress],
  );

  const renderCategory = useCallback(
    ({ item }: { item: TipCategory | 'all' }) => (
      <Chip
        label={t(`tips.${item}`)}
        variant={item === selectedCategory ? 'selected' : 'default'}
        onPress={() => setSelectedCategory(item)}
      />
    ),
    [selectedCategory, t],
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background.primary }]}
      edges={['top']}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <ChevronLeft size={24} color={theme.text.primary} />
        </TouchableOpacity>
        <Text variant="h2" accessibilityRole="header">
          {t('tips.title')}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Category filter chips */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={renderCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipList}
        ItemSeparatorComponent={ChipSeparator}
        style={styles.chipContainer}
      />

      {/* Tips list */}
      <FlatList
        data={filteredTips}
        keyExtractor={(item) => item.id}
        renderItem={renderTip}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

function ChipSeparator() {
  return <View style={styles.chipSeparator} />;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  headerSpacer: {
    flex: 1,
  },
  chipContainer: {
    flexGrow: 0,
  },
  chipList: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  chipSeparator: {
    width: spacing.sm,
  },
  listContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing['2xl'],
  },
  tipItem: {
    paddingBottom: spacing.md,
  },
});
