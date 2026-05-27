import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

import imgInstall1 from '../assets/gutters 6 pulgadas/ChatGPT Image 26 may 2026, 10_18_20.png'
import imgInstall2 from '../assets/gutters 6 pulgadas/ChatGPT Image 26 may 2026, 10_22_57.png'
import imgInstall3 from '../assets/gutters 6 pulgadas/ChatGPT Image 26 may 2026, 10_31_08.png'
import imgHalfRound from '../assets/Half Round gutters/ChatGPT Image 26 may 2026, 10_48_56.png'
import imgSquare1 from '../assets/Square European gutters/ChatGPT Image 26 may 2026, 11_24_01.png'
import imgSquare2 from '../assets/Square European gutters/ChatGPT Image 26 may 2026, 11_30_17.png'
import imgSquare3 from '../assets/Square European gutters/ChatGPT Image 26 may 2026, 11_33_23.png'
import imgGuard1 from '../assets/Leaf guard/ChatGPT Image 26 may 2026, 10_58_11.png'
import imgGuard2 from '../assets/Leaf guard/ChatGPT Image 26 may 2026, 11_07_09.png'
import imgGuard3 from '../assets/Leaf guard/ChatGPT Image 26 may 2026, 11_09_24.png'
import imgGuard4 from '../assets/Leaf guard/ChatGPT Image 26 may 2026, 11_12_40.png'
import imgClean1 from '../assets/Limpieza de gutters/ChatGPT Image 26 may 2026, 11_17_52.png'
import imgClean2 from '../assets/Limpieza de gutters/ChatGPT Image 26 may 2026, 11_20_20.png'
import imgCopper1 from '../assets/Cooper gutters/07.png'
import imgCopper2 from '../assets/Cooper gutters/8.png'

const ALL_PHOTOS = [
  { src: imgInstall1, categoryKey: 'galCatInstall', labelKey: 'galLabelKStyle' },
  { src: imgInstall2, categoryKey: 'galCatInstall', labelKey: 'galLabelKStyle' },
  { src: imgInstall3, categoryKey: 'galCatInstall', labelKey: 'galLabelKStyle' },
  { src: imgHalfRound, categoryKey: 'galCatInstall', labelKey: 'galLabelHalfRound' },
  { src: imgSquare1, categoryKey: 'galCatInstall', labelKey: 'galLabelSquare' },
  { src: imgSquare2, categoryKey: 'galCatInstall', labelKey: 'galLabelSquare' },
  { src: imgSquare3, categoryKey: 'galCatInstall', labelKey: 'galLabelSquare' },
  { src: imgGuard1, categoryKey: 'galCatGuard', labelKey: 'galLabelGuard' },
  { src: imgGuard2, categoryKey: 'galCatGuard', labelKey: 'galLabelGuard' },
  { src: imgGuard3, categoryKey: 'galCatGuard', labelKey: 'galLabelGuard' },
  { src: imgGuard4, categoryKey: 'galCatGuard', labelKey: 'galLabelGuard' },
  { src: imgClean1, categoryKey: 'galCatClean', labelKey: 'galLabelClean' },
  { src: imgClean2, categoryKey: 'galCatClean', labelKey: 'galLabelClean' },
  { src: imgCopper1, categoryKey: 'galCatPremium', labelKey: 'galLabelCopper' },
  { src: imgCopper2, categoryKey: 'galCatPremium', labelKey: 'galLabelCopper' },
]

const CATEGORIES = ['galCatAll', 'galCatInstall', 'galCatGuard', 'galCatClean', 'galCatPremium']

export default function Gallery() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('galCatAll')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeCategory === 'galCatAll'
      ? ALL_PHOTOS
      : ALL_PHOTOS.filter((p) => p.categoryKey === activeCategory)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % filtered.length)
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, prev, next])

  return (
    <section id="gallery" className="py-24 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#3BA8DF]" />
          <h2 className="text-3xl md:text-4xl font-black text-[#0d2240] font-headline tracking-wide">
            {t('galTitle')}
          </h2>
          <div className="h-px w-12 bg-[#3BA8DF]" />
        </div>
        <p className="text-center text-slate-500 text-sm mb-10 max-w-xl mx-auto">
          {t('galSubtitle')}
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#3BA8DF] text-white shadow-md shadow-[#3BA8DF]/30'
                  : 'bg-white text-[#0d2240] border border-slate-200 hover:border-[#3BA8DF] hover:text-[#3BA8DF]'
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo, idx) => (
            <div
              key={photo.src + idx}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 aspect-[4/3]"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={photo.src}
                alt={t(photo.labelKey)}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0d2240]/0 group-hover:bg-[#0d2240]/50 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(photo.labelKey)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#3BA8DF] hover:bg-[#2d8bc0] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-[#3BA8DF]/25"
          >
            {t('galCta')}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center gap-3">
            <img
              src={filtered[lightboxIndex].src}
              alt={t(filtered[lightboxIndex].labelKey)}
              className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest">
              {t(filtered[lightboxIndex].labelKey)} &mdash; {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
