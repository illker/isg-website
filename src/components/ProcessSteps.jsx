import { ClipboardCheck, HardHat, ShieldCheck, Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const stepsConfig = [
  {
    numKey: 'processStep1Num',
    titleKey: 'processStep1Title',
    descKey: 'processStep1Desc',
    bulletKeys: ['processStep1Bullet1', 'processStep1Bullet2', 'processStep1Bullet3'],
    icon: ClipboardCheck,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
  {
    numKey: 'processStep2Num',
    titleKey: 'processStep2Title',
    descKey: 'processStep2Desc',
    bulletKeys: ['processStep2Bullet1', 'processStep2Bullet2', 'processStep2Bullet3'],
    icon: HardHat,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7FEFm8rR14_CSFI8XSz3QUlBzE5qC-gZRWpYaEBhqVF18qDFGvwOutTbHk_P_QCWnXMicIGgWgY_MuT0dhBKMJt-mlX5U-K449n-w2gcY83xKfGf90-vbsKHmzFMBVDVP3Wjs3zGfjFFZTi9Mi7BQdjgGbkdWDnE1NLaA47M7gryytMkCLs5GD1kZmZr8_ykfDNSWVkw6wXuN4CFnXTFCYlD4Dru4dlkfoudiX4g-tXqiNyGc__oFPCNzqHsE0E3moc2A8iDIKBAe',
    reverse: true,
  },
  {
    numKey: 'processStep3Num',
    titleKey: 'processStep3Title',
    descKey: 'processStep3Desc',
    bulletKeys: ['processStep3Bullet1', 'processStep3Bullet2', 'processStep3Bullet3'],
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
]

export default function ProcessSteps() {
  const { t } = useLanguage()

  return (
    <section id="process" className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-[#3BA8DF] uppercase tracking-[0.2em] mb-3">
            {t('heroCall') === 'Call Now' ? 'Our Process' : 'Nuestro Proceso'}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2240] font-headline">
            {t('processTitle')}
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24 lg:space-y-32">
          {stepsConfig.map(({ numKey, titleKey, descKey, bulletKeys, icon: Icon, image, reverse }) => (
            <div
              key={titleKey}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={reverse ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#3BA8DF]/10 rounded-[2rem] blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={image}
                      alt={t(titleKey)}
                      className="w-full h-[320px] md:h-[420px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2240]/30 to-transparent" />
                  </div>
                  {/* Floating step badge */}
                  <div
                    className={`absolute ${reverse ? '-left-4 lg:-left-8' : '-right-4 lg:-right-8'} -bottom-6 w-20 h-20 bg-[#3BA8DF] rounded-2xl flex items-center justify-center shadow-xl`}
                  >
                    <span className="text-3xl font-black text-white font-headline">{t(numKey)}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#3BA8DF]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#3BA8DF]" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-[#3BA8DF] uppercase tracking-wider">
                    {t('heroCall') === 'Call Now' ? 'Step' : 'Paso'} {t(numKey)}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-[#0d2240] font-headline mb-4 leading-tight">
                  {t(titleKey)}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  {t(descKey)}
                </p>

                <ul className="space-y-4">
                  {bulletKeys.map((key) => (
                    <li key={key} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#0d2240] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
