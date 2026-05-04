import Icon from './Icon'
import { useLanguage } from '../context/LanguageContext'

export default function MobileNav() {
  const { t } = useLanguage()
  const items = [
    { icon: 'home', labelKey: 'mobileHome', href: '#home', active: true },
    { icon: 'build', labelKey: 'mobileServices', href: '#services' },
    { icon: 'info', labelKey: 'mobileAbout', href: '#about' },
    { icon: 'request_quote', labelKey: 'mobileContact', href: '#contact' },
  ]
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-[#F9F9F9] dark:bg-slate-950 z-50 rounded-t-2xl shadow-[0_-10px_30px_rgba(0,28,58,0.06)]">
      {items.map(({ icon, labelKey, href, active }) => (
        <a
          key={labelKey}
          href={href}
          className={
            active
              ? 'flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-xl p-2 px-4 scale-95 transition-all'
              : 'flex flex-col items-center justify-center text-slate-500 p-2 hover:bg-slate-200 transition-all'
          }
        >
          <Icon name={icon} />
          <span className="text-[10px] font-bold font-headline mt-1">{t(labelKey)}</span>
        </a>
      ))}
    </nav>
  )
}
