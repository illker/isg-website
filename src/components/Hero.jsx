import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Phone, ShieldCheck, Zap, BadgeCheck, Lock, CalendarDays } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [service, setService] = useState('')
  return (
    <header id="home" className="relative min-h-[800px] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Modern suburban home with pristine seamless dark gutters"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAljqBREt8AuCSOg0g49sJm1O9RAKgdXso4FDywmAARwJXqFiwsaRKMlSIMcFPYokvuWHxtg347OrvqnD0pLP_OcvsDrIllYM4GHWuqTyZMFkywgv3ByXBpgI4OmSiwEc03CnNlNHrB-lQsZ7T6LyVj2IrMSCJpo0PfBT3Kev-kZO0_yyJaEejGP1iRzEbIgy_CCn1jC9qmucpm3JAMhcDF4IhHHE7FyHYpaxevcrvXGgq2XVClPDEu-1Ml9Yw7M1pRYQkCMbWiVi2A"
        />
        <div className="absolute inset-0 bg-[#0d2240]/85" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div>
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">
              {t('heroOverline')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black font-headline leading-[1.1] mb-6">
              <span className="text-white block">{t('heroTitleWhite')}</span>
              <span className="text-[#3BA8DF] block">{t('heroTitleBlue')}</span>
            </h1>
            <p className="text-base text-white/80 mb-8 leading-relaxed max-w-md">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-[#3BA8DF] hover:bg-[#2d8bc0] text-white font-bold rounded-lg px-6 shadow-lg"
                >
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {t('heroCta')}
                </Button>
              </a>
              <a href="tel:+19543299579">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#1a3050] border-2 border-white/30 text-white hover:bg-[#243b5e] hover:text-white font-bold rounded-lg px-6"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('heroCall')}
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: BadgeCheck, key: 'heroTrust1' },
                { icon: Zap, key: 'heroTrust2' },
                { icon: ShieldCheck, key: 'heroTrust3' },
              ].map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-center gap-2 text-white/90">
                  <Icon className="w-5 h-5 text-[#3BA8DF]" />
                  <span className="text-sm font-semibold uppercase tracking-wide">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Form card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-[420px]">
              <h2 className="text-2xl font-black text-[#0d2240] font-headline mb-1">
                {t('formTitle').replace('Your ', '').replace('Su ', '')}
              </h2>
              <p className="text-sm font-bold text-[#3BA8DF] mb-6 uppercase tracking-wide">
                {t('formTitle').includes('Free') ? 'FREE ESTIMATE' : 'PRESUPUESTO GRATIS'}
              </p>

              <form
                name="estimate"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="estimate" />
                <p className="hidden">
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>
                <div>
                  <Input
                    name="name"
                    type="text"
                    required
                    placeholder={t('formNameLabel')}
                    className="h-11 rounded-lg border-gray-200 text-sm"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    placeholder={t('formPhoneLabel')}
                    className="h-11 rounded-lg border-gray-200 text-sm"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder={t('formEmailLabel')}
                    className="h-11 rounded-lg border-gray-200 text-sm"
                  />
                </div>
                <div>
                  <input type="hidden" name="service" value={service} />
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="h-11 rounded-lg border-gray-200 text-sm text-gray-500">
                      <SelectValue placeholder={t('formServicePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">{t('formOptInstall')}</SelectItem>
                      <SelectItem value="leaf-guard">{t('formOptGuard')}</SelectItem>
                      <SelectItem value="repair">{t('formOptRepair')}</SelectItem>
                      <SelectItem value="cleaning">{t('formOptClean')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#3BA8DF] hover:bg-[#2d8bc0] text-white font-bold rounded-lg h-11"
                >
                  {t('formSubmit')}
                </Button>
                <div className="flex items-start gap-2 text-[10px] text-gray-400">
                  <Lock className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>{t('formPrivacy')}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
