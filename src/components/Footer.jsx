import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-[#E2E2E2] dark:bg-slate-900 w-full mt-20 px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        <div>
          <span className="text-xl font-black text-primary dark:text-white font-headline block mb-6">
            Integral Solutions Gutters
          </span>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-body">
            {t('footerDesc')}
          </p>
        </div>
        <div className="md:px-12">
          <h4 className="text-primary dark:text-blue-200 font-bold mb-6 font-headline">{t('footerQuickLinks')}</h4>
          <nav className="flex flex-col gap-3">
            <a className="text-slate-600 dark:text-slate-400 hover:underline decoration-2 underline-offset-4 text-sm" href="#services">{t('svcInstallTitle')}</a>
            <a className="text-slate-600 dark:text-slate-400 hover:underline decoration-2 underline-offset-4 text-sm" href="#services">{t('svcGuardTitle')}</a>
            <a className="text-slate-600 dark:text-slate-400 hover:underline decoration-2 underline-offset-4 text-sm" href="#services">{t('svcRepairTitle')}</a>
            <a className="text-slate-600 dark:text-slate-400 hover:underline decoration-2 underline-offset-4 text-sm" href="#services">{t('svcCleanTitle')}</a>
          </nav>
        </div>
        <div>
          <h4 className="text-primary dark:text-blue-200 font-bold mb-6 font-headline">{t('footerContact')}</h4>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <p className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5" />
              (954) 329-9579
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              info@isggutters.com
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5" />
              {t('footerLocation')}
            </p>
          </div>
          <div className="mt-8">
            <a className="text-slate-600 dark:text-slate-400 hover:underline decoration-2 underline-offset-4 text-xs font-medium" href="#">
              {t('footerSocial')}
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-300 dark:border-slate-800 text-center">
        <p className="text-slate-500 text-xs font-body">
          {t('footerCopyright')}
        </p>
      </div>
    </footer>
  )
}
