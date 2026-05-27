import { Button } from '@/components/ui/button'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/integral-solutions-gutters-logo-horizontal.png'

export default function Navbar() {
  const { t, lang, setLang, toggleLang } = useLanguage()
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm dark:bg-slate-900/80 dark:shadow-none">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center h-[95px] w-[250px]">
          <img src={logo} alt="Integral Solutions Gutters" className="h-full w-full object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-blue-900 dark:text-blue-300 font-bold hover:text-blue-700 transition-colors duration-200 font-label" href="#home">{t('navHome')}</a>
          <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-700 transition-colors duration-200 font-label" href="#services">{t('navServices')}</a>
          <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-700 transition-colors duration-200 font-label" href="#about">{t('navAbout')}</a>
          <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-700 transition-colors duration-200 font-label" href="#contact">{t('navContact')}</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+19543299579" className="hidden md:inline text-primary font-bold hover:text-primary/80 transition-colors font-label">
            (954) 329-9579
          </a>
          {/* Desktop segmented pill toggle */}
          <div className="hidden md:flex relative items-center h-8 border-2 border-primary rounded-full overflow-hidden bg-white/60 dark:bg-slate-800/60">
            <div
              className="absolute top-0 bottom-0 w-1/2 bg-primary rounded-full transition-all duration-300"
              style={{ left: lang === 'en' ? '0%' : '50%' }}
            />
            <button
              onClick={() => setLang('en')}
              className={`relative z-10 w-12 h-full text-xs font-bold transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-primary'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`relative z-10 w-12 h-full text-xs font-bold transition-colors duration-300 ${lang === 'es' ? 'text-white' : 'text-primary'}`}
            >
              ES
            </button>
          </div>
          {/* Mobile toggle button */}
          <button
            onClick={toggleLang}
            className="md:hidden h-8 min-w-[64px] px-4 rounded-full border-2 border-primary bg-white/60 dark:bg-slate-800/60 text-xs font-bold text-primary"
          >
            {lang === 'en' ? 'EN' : 'ES'}
          </button>
          <a href="#contact">
            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-6"
            >
              {t('navCta')}
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
