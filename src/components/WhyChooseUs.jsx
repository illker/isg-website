import { Users, Hammer, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const reasonsConfig = [
  { icon: Users, titleKey: 'whyInstallTitle', descKey: 'whyInstallDesc' },
  { icon: Hammer, titleKey: 'whyMaterialsTitle', descKey: 'whyMaterialsDesc' },
  { icon: ShieldCheck, titleKey: 'whyWarrantyTitle', descKey: 'whyWarrantyDesc' },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-24 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <h2 className="text-4xl font-black text-primary font-headline mb-8 leading-tight">
              {t('whyTitle')}
            </h2>
            <div className="space-y-8">
              {reasonsConfig.map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{t(titleKey)}</h4>
                    <p className="text-on-surface-variant">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              alt="A professional gutter installer working on a high roof"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7FEFm8rR14_CSFI8XSz3QUlBzE5qC-gZRWpYaEBhqVF18qDFGvwOutTbHk_P_QCWnXMicIGgWgY_MuT0dhBKMJt-mlX5U-K449n-w2gcY83xKfGf90-vbsKHmzFMBVDVP3Wjs3zGfjFFZTi9Mi7BQdjgGbkdWDnE1NLaA47M7gryytMkCLs5GD1kZmZr8_ykfDNSWVkw6wXuN4CFnXTFCYlD4Dru4dlkfoudiX4g-tXqiNyGc__oFPCNzqHsE0E3moc2A8iDIKBAe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
