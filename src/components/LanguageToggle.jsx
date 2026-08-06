import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const isEs = i18n.language === 'es';

  return (
    <div className="relative">
        <button
            onClick={toggleLanguage}
            className="absolute -mt-13 -ml-16 md:-mt-16 md:-ml-3 w-23 h-9 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[10px] font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:shadow active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label="Cambiar idioma"
            >
            <span className="text-base">{isEs ? '🇲🇽' : '🇺🇸'}</span>
            <span>{isEs ? 'ES / EN' : 'EN / ES'}</span>
            </button>
    </div>
  );
}