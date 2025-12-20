import translations from '@/i18n/en.json';

interface TranslationObject {
  [key: string]: string | TranslationObject;
}

export function getTranslations(_locale = 'en') {
  const tData = translations as TranslationObject;

  const t = (key: string): string => {
    const result = key.split('.').reduce<TranslationObject | string | undefined>((obj, k) => {
      if (typeof obj === 'object' && obj !== null) {
        return obj[k];
      }
      return undefined;
    }, tData);
    return typeof result === 'string' ? result : key;
  };

  return t;
}
