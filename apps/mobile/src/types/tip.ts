export type TipCategory = 'usage' | 'cleaning' | 'maintenance' | 'safety' | 'hacks';

export interface Tip {
  id: string;
  title: {
    es: string;
    en: string;
  };
  content: {
    es: string;
    en: string;
  };
  category: TipCategory;
  thermomixSettings?: string;
  compatibility?: string;
}
