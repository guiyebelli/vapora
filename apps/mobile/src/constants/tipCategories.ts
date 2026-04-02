import {
  Droplets,
  ChefHat,
  Wrench,
  ShieldCheck,
  Lightbulb,
} from 'lucide-react-native';
import { colors } from '@/theme';
import type { TipCategory } from '@/types';

export const tipCategoryConfig: Record<
  TipCategory,
  { icon: typeof Droplets; color: string; bg: string; bgDark: string }
> = {
  cleaning: {
    icon: Droplets,
    color: colors.accent[500],
    bg: '#D4F0E0',
    bgDark: '#1A3D2A',
  },
  usage: {
    icon: ChefHat,
    color: colors.primary[500],
    bg: '#FFE4D4',
    bgDark: '#3D2415',
  },
  maintenance: {
    icon: Wrench,
    color: '#8B6914',
    bg: '#FFF0D4',
    bgDark: '#3D3015',
  },
  safety: {
    icon: ShieldCheck,
    color: '#C44A4A',
    bg: '#FFD4D4',
    bgDark: '#3D1515',
  },
  hacks: {
    icon: Lightbulb,
    color: '#6B5CE7',
    bg: '#E8D4FF',
    bgDark: '#2A1E3D',
  },
};
