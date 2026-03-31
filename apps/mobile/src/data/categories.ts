import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'desserts',
    name: { es: 'Postres', en: 'Desserts' },
    icon: '🍰',
    color: '#FFF0E6',
    colorDark: '#3D2518',
  },
  {
    id: 'breads',
    name: { es: 'Panes', en: 'Breads' },
    icon: '🍞',
    color: '#FDF5E6',
    colorDark: '#3D3518',
  },
  {
    id: 'soups',
    name: { es: 'Sopas', en: 'Soups' },
    icon: '🥣',
    color: '#E6F5EE',
    colorDark: '#18352A',
  },
  {
    id: 'sauces',
    name: { es: 'Salsas', en: 'Sauces' },
    icon: '🫕',
    color: '#FFE6E6',
    colorDark: '#3D1818',
  },
  {
    id: 'drinks',
    name: { es: 'Bebidas', en: 'Drinks' },
    icon: '🥤',
    color: '#E6F0FF',
    colorDark: '#182A3D',
  },
  {
    id: 'main_courses',
    name: { es: 'Platos principales', en: 'Main courses' },
    icon: '🍝',
    color: '#F5E6FF',
    colorDark: '#2A183D',
  },
  {
    id: 'starters',
    name: { es: 'Entrantes', en: 'Starters' },
    icon: '🥗',
    color: '#E6FFE6',
    colorDark: '#183D18',
  },
  {
    id: 'doughs',
    name: { es: 'Masas', en: 'Doughs' },
    icon: '🫓',
    color: '#FFF5E6',
    colorDark: '#3D3018',
  },
];
