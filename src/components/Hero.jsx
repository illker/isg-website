import { useState, useEffect, useCallback } from 'react'
import bg1 from '../assets/isg-bg1.webp'
import bg2 from '../assets/isg-bg2.webp'
import bg3 from '../assets/isg-bg3.webp'
import bg4 from '../assets/isg-bg4.webp'
import bg5 from '../assets/isg-bg5.webp'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Phone, ShieldCheck, Zap, BadgeCheck, Lock, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const SLIDES = [bg1, bg2, bg3, bg4, bg5]
const INTERVAL = 5000

export default function Hero() {
  const { t } = useLanguage()
  const [service, setService] = useState('')
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <header id="home" className="relative min-h-screen flex items-center pt-24 pb-20 md:pb-16 overflow-hidden">
      {/* Background Slideshow */}
      <div
        className="absolute inset-0 z-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-[#0d2240]/80" />

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 items-center justify-center text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2.5 bg-[#3BA8DF]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 sm:px-10 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div>
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-5">
              {t('heroOverline')}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black font-headline leading-[1.15] mb-6">
              <span className="text-white block">{t('heroTitleWhite')}</span>
              <span className="text-[#3BA8DF] block">{t('heroTitleBlue')}</span>
            </h1>
            <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed max-w-xl">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
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
            <div className="flex flex-wrap gap-4 sm:gap-6">
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
