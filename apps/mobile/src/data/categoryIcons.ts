import React from 'react';
import type { CategoryId } from '@/types';

import CatDesserts from '../../assets/icons/cat-desserts.svg';
import CatBreads from '../../assets/icons/cat-breads.svg';
import CatSoups from '../../assets/icons/cat-soups.svg';
import CatSauces from '../../assets/icons/cat-sauces.svg';
import CatDrinks from '../../assets/icons/cat-drinks.svg';
import CatMains from '../../assets/icons/cat-mains.svg';
import CatStarters from '../../assets/icons/cat-starters.svg';
import CatDoughs from '../../assets/icons/cat-doughs.svg';

type SvgComponent = React.FC<{ width?: number; height?: number; color?: string }>;

export const categoryIcons: Record<CategoryId, SvgComponent> = {
  desserts: CatDesserts,
  breads: CatBreads,
  soups: CatSoups,
  sauces: CatSauces,
  drinks: CatDrinks,
  main_courses: CatMains,
  starters: CatStarters,
  doughs: CatDoughs,
};
