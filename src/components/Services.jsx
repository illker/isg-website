import { useState } from 'react'
import { ClipboardList, Shield, Wrench, Droplets, Users, Hammer, ShieldCheck, Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const servicesConfig = [
  {
    icon: ClipboardList,
    titleKey: 'svcInstallTitle',
    descKey: 'svcInstallDesc',
    itemKeys: ['svcInstall1', 'svcInstall2', 'svcInstall3', 'svcInstall4'],
  },
  {
    icon: Shield,
    titleKey: 'svcGuardTitle',
    descKey: 'svcGuardDesc',
    itemKeys: ['svcGuard1', 'svcGuard2', 'svcGuard3', 'svcGuard4'],
  },
  {
    icon: Wrench,
    titleKey: 'svcRepairTitle',
    descKey: 'svcRepairDesc',
    itemKeys: ['svcRepair1', 'svcRepair2', 'svcRepair3', 'svcRepair4'],
  },
  {
    icon: Droplets,
    titleKey: 'svcCleanTitle',
    descKey: 'svcCleanDesc',
    itemKeys: ['svcClean1', 'svcClean2', 'svcClean3', 'svcClean4'],
  },
]

const featuresConfig = [
  { icon: Users, titleKey: 'whyInstallTitle', descKey: 'whyInstallDesc' },
  { icon: Hammer, titleKey: 'whyMaterialsTitle', descKey: 'whyMaterialsDesc' },
  { icon: ShieldCheck, titleKey: 'whyWarrantyTitle', descKey: 'whyWarrantyDesc' },
]

function FlipCard({ icon: Icon, titleKey, descKey, itemKeys, t }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)

  return (
    <div
      className="group relative w-full"
      style={{ perspective: '1000px' }}
      onClick={toggle}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : undefined,
        }}
      >
        {/* FRONT */}
        <div
          className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-[#3BA8DF] flex items-center justify-center mb-5">
            <Icon className="w-11 h-11 text-[#3BA8DF]" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-black text-[#0d2240] font-headline uppercase tracking-wide mb-5">
            {t(titleKey)}
          </h3>
          <ul className="space-y-3 text-left w-full">
            {itemKeys.map((key) => (
              <li key={key} className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 rounded-full bg-[#3BA8DF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                {t(key)}
              </li>
            ))}
          </ul>
          <div className="mt-5 text-xs text-slate-400 font-medium uppercase tracking-wider">
            {t('heroCall') === 'Call Now' ? 'Click to learn more' : 'Clic para mas info'}
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center bg-[#0d2240] rounded-2xl p-6 shadow-lg cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#3BA8DF] flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-[#3BA8DF]" strokeWidth={1.5} />
          </div>
          <h3 className="text-base font-black text-white font-headline uppercase tracking-wide mb-3">
            {t(titleKey)}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed mb-6">
            {t(descKey)}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#3BA8DF] hover:bg-[#2d8bc0] text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {t('svcBackCta')}
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-4 text-xs text-white/40 font-medium uppercase tracking-wider">
            {t('heroCall') === 'Call Now' ? 'Click to flip back' : 'Clic para volver'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="py-24 bg-white">
      <style>{`
        @media (hover: hover) {
          .group:hover > div {
            transform: rotateY(180deg) !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 bg-[#3BA8DF]" />
          <h2 className="text-3xl md:text-4xl font-black text-[#0d2240] font-headline tracking-wide">
            {t('servicesTitle')}
          </h2>
          <div className="h-px w-12 bg-[#3BA8DF]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {servicesConfig.map(({ icon, titleKey, descKey, itemKeys }) => (
            <FlipCard
              key={titleKey}
              icon={icon}
              titleKey={titleKey}
              descKey={descKey}
              itemKeys={itemKeys}
              t={t}
            />
          ))}
        </div>

        {/* Feature Cards */}
        <div className="bg-[#f1f5f9] rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresConfig.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#3BA8DF] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#3BA8DF]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0d2240] uppercase tracking-wide mb-1">
                    {t(titleKey)}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {t(descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
