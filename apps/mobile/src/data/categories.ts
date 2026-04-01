import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'desserts',
    name: { es: 'Postres', en: 'Desserts' },
    icon: '🍰',
    color: '#FFE0CC',
    colorDark: '#3D2518',
  },
  {
    id: 'breads',
    name: { es: 'Panes', en: 'Breads' },
    icon: '🍞',
    color: '#FFF0D4',
    colorDark: '#3D3518',
  },
  {
    id: 'soups',
    name: { es: 'Sopas', en: 'Soups' },
    icon: '🥣',
    color: '#D4F0E0',
    colorDark: '#18352A',
  },
  {
    id: 'sauces',
    name: { es: 'Salsas', en: 'Sauces' },
    icon: '🫕',
    color: '#FFD4D4',
    colorDark: '#3D1818',
  },
  {
    id: 'drinks',
    name: { es: 'Bebidas', en: 'Drinks' },
    icon: '🥤',
    color: '#D4E8FF',
    colorDark: '#182A3D',
  },
  {
    id: 'main_courses',
    name: { es: 'Platos principales', en: 'Main courses' },
    icon: '🍝',
    color: '#E8D4FF',
    colorDark: '#2A183D',
  },
  {
    id: 'starters',
    name: { es: 'Entrantes', en: 'Starters' },
    icon: '🥗',
    color: '#D4FFD4',
    colorDark: '#183D18',
  },
  {
    id: 'doughs',
    name: { es: 'Masas', en: 'Doughs' },
    icon: '🫓',
    color: '#FFE8D4',
    colorDark: '#3D3018',
  },
];
