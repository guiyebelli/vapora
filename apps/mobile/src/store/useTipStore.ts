import { create } from 'zustand';
import type { Tip, TipCategory } from '@/types';
import { tips as seedTips } from '@/data';

interface TipState {
  tips: Tip[];
  getTipById: (id: string) => Tip | undefined;
  getTipsByCategory: (category: TipCategory) => Tip[];
}

export const useTipStore = create<TipState>()((_, get) => ({
  tips: seedTips,
  getTipById: (id) => get().tips.find((t) => t.id === id),
  getTipsByCategory: (category) =>
    get().tips.filter((t) => t.category === category),
}));
