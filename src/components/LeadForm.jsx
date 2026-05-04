import { Phone, Clock, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function LeadForm() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-24 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#0d2240] font-headline mb-4">
          {t('formTitle')}
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          {t('formDesc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#3BA8DF]/10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#3BA8DF]" />
            </div>
            <h3 className="font-bold text-[#0d2240]">{t('formPhoneLabel')}</h3>
            <p className="text-slate-600">(954) 329-9579</p>
          </div>
          <a
            href="https://wa.me/19543299579"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="font-bold text-[#0d2240]">WhatsApp</h3>
            <p className="text-slate-600 group-hover:text-[#25D366] transition-colors">(954) 329-9579</p>
          </a>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#3BA8DF]/10 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#3BA8DF]" />
            </div>
            <h3 className="font-bold text-[#0d2240]">{t('formEmailLabel')}</h3>
            <p className="text-slate-600">info@isggutters.com</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#3BA8DF]/10 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#3BA8DF]" />
            </div>
            <h3 className="font-bold text-[#0d2240]">{t('formHours').split(':')[0]}</h3>
            <p className="text-slate-600">{t('formHours').split(': ').slice(1).join(': ')}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm max-w-md mx-auto">
          <div className="w-12 h-12 bg-[#3BA8DF]/10 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#3BA8DF]" />
          </div>
          <h3 className="font-bold text-[#0d2240]">{t('footerLocation')}</h3>
        </div>
      </div>
    </section>
  )
}
