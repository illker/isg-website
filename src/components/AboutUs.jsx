import { Target, Eye, Building2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function AboutUs() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Us */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#3BA8DF]" />
            <h2 className="text-3xl md:text-4xl font-black text-[#0d2240] font-headline tracking-wide">
              {t('aboutUsTitle')}
            </h2>
            <div className="h-px w-12 bg-[#3BA8DF]" />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('aboutUsText')}
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-[#3BA8DF]/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#3BA8DF]" />
            </div>
            <h3 className="text-2xl font-black text-[#0d2240] font-headline mb-4">
              {t('missionTitle')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('missionText')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-[#3BA8DF]/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#3BA8DF]" />
            </div>
            <h3 className="text-2xl font-black text-[#0d2240] font-headline mb-4">
              {t('visionTitle')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t('visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
