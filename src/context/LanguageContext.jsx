import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  const t = useCallback(
    (key) => {
      const val = translations[key]
      if (!val) return key
      return val[lang] || val.en || key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

const translations = {
  // Navbar
  navHome: { en: 'Home', es: 'Inicio' },
  navServices: { en: 'Services', es: 'Servicios' },
  navAbout: { en: 'About', es: 'Nosotros' },
  navContact: { en: 'Contact', es: 'Contacto' },
  navCta: { en: 'Get Free Estimate', es: 'Presupuesto Gratis' },

  // Hero
  heroOverline: { en: 'South Florida Gutter & Exterior Experts', es: 'Expertos en Canaletas y Exteriores del Sur de Florida' },
  heroTitleWhite: { en: 'Protecting Your Property with', es: 'Protegiendo Su Propiedad con' },
  heroTitleBlue: { en: 'Quality & Professionalism', es: 'Calidad y Profesionalismo' },
  heroTitle: { en: 'Protecting Your Property with Quality & Professionalism', es: 'Protegiendo Su Propiedad con Calidad y Profesionalismo' },
  heroSubtitle: { en: 'At Integral Solutions Gutters, we specialize in seamless gutter installation, gutter repairs, professional cleaning, and exterior maintenance services throughout South Florida. Our commitment is to provide reliable service, quality workmanship, and clean professional finishes that help protect and enhance your property. Whether residential or commercial, our team works with dedication, attention to detail, and customer satisfaction as our top priority.', es: 'En Integral Solutions Gutters, nos especializamos en instalacion de canaletas sin costuras, reparaciones, limpieza profesional y servicios de mantenimiento exterior en todo el Sur de Florida. Nuestro compromiso es brindar servicio confiable, mano de obra de calidad y acabados profesionales limpios que ayuden a proteger y mejorar su propiedad. Ya sea residencial o comercial, nuestro equipo trabaja con dedicacion, atencion al detalle y la satisfaccion del cliente como nuestra maxima prioridad.' },
  heroCta: { en: 'Get Free Estimate', es: 'Presupuesto Gratis' },
  heroCall: { en: 'Call Now', es: 'Llame Ahora' },
  heroTrust1: { en: 'Free Estimates', es: 'Presupuestos Gratis' },
  heroTrust2: { en: 'Fast Service', es: 'Servicio Rapido' },
  heroTrust3: { en: 'Licensed & Insured', es: 'Licenciado y Asegurado' },

  // Services
  servicesTitle: { en: 'Our Services', es: 'Nuestros Servicios' },
  svcInstallTitle: { en: 'Gutter Installation', es: 'Instalacion de Canaletas' },
  svcInstall1: { en: 'K-Style (K6 & K7)', es: 'Estilo K (K6 y K7)' },
  svcInstall2: { en: 'Half Round', es: 'Semicircular' },
  svcInstall3: { en: 'European Square', es: 'Cuadrada Europea' },
  svcInstall4: { en: 'Copper', es: 'Cobre' },
  svcGuardTitle: { en: 'Leaf Guard Installation', es: 'Instalacion de Protectores' },
  svcGuard1: { en: 'Prevent clogs', es: 'Evite obstrucciones' },
  svcGuard2: { en: 'Keep water flowing', es: 'Mantenga el flujo de agua' },
  svcGuard3: { en: 'Reduce maintenance', es: 'Reduzca el mantenimiento' },
  svcGuard4: { en: 'Protect your home', es: 'Proteja su hogar' },
  svcRepairTitle: { en: 'Gutter Repair', es: 'Reparacion de Canaletas' },
  svcRepair1: { en: 'Fix leaks', es: 'Repare fugas' },
  svcRepair2: { en: 'Replace damaged sections', es: 'Reemplace secciones danadas' },
  svcRepair3: { en: 'Realign gutters', es: 'Realinee canaletas' },
  svcRepair4: { en: 'Restore proper flow', es: 'Restaure el flujo adecuado' },
  svcCleanTitle: { en: 'Gutter Cleaning', es: 'Limpieza de Canaletas' },
  svcClean1: { en: 'Remove debris', es: 'Elimine residuos' },
  svcClean2: { en: 'Clean downspouts', es: 'Limpie bajadas' },
  svcClean3: { en: 'Prevent water damage', es: 'Prevenga danos por agua' },
  svcClean4: { en: 'Ensure proper drainage', es: 'Asegure drenaje adecuado' },

  // Service Card Back Descriptions
  svcInstallDesc: { en: 'We install seamless gutters in K-Style, Half Round, European Square, and premium copper to match your home and maximize water flow.', es: 'Instalamos canaletas sin costuras en estilo K, semicircular, cuadrada europea y cobre premium para complementar su hogar y maximizar el flujo de agua.' },
  svcGuardDesc: { en: 'Our leaf guards prevent clogs, keep water flowing smoothly, reduce maintenance needs, and protect your home from overflow damage.', es: 'Nuestros protectores de hojas evitan obstrucciones, mantienen el agua fluyendo sin problemas, reducen las necesidades de mantenimiento y protegen su hogar de danos por desbordamiento.' },
  svcRepairDesc: { en: 'From fixing small leaks to replacing damaged sections and realigning sagging gutters, we restore your system to peak performance.', es: 'Desde reparar pequenas fugas hasta reemplazar secciones danadas y realinear canaletas colgantes, restauramos su sistema al maximo rendimiento.' },
  svcCleanDesc: { en: 'Regular cleaning removes leaves and debris, prevents costly water damage, extends gutter life, and maintains drainage efficiency.', es: 'La limpieza regular elimina hojas y residuos, previene danos costosos por agua, extiende la vida de las canaletas y mantiene la eficiencia del drenaje.' },
  svcBackCta: { en: 'Get Free Estimate', es: 'Presupuesto Gratis' },

  // Process Steps
  processTitle: { en: 'How It Works', es: 'Como Funciona' },
  processStep1Num: { en: '01', es: '01' },
  processStep1Title: { en: 'Free Inspection & Estimate', es: 'Inspeccion y Presupuesto Gratis' },
  processStep1Desc: { en: 'Our team visits your property to assess your gutter needs, take precise measurements, and provide a detailed, no-obligation quote tailored to your home.', es: 'Nuestro equipo visita su propiedad para evaluar sus necesidades de canaletas, tomar mediciones precisas y proporcionar un presupuesto detallado sin compromiso adaptado a su hogar.' },
  processStep1Bullet1: { en: 'On-site professional assessment', es: 'Evaluacion profesional en sitio' },
  processStep1Bullet2: { en: 'Detailed written quote provided', es: 'Presupuesto detallado por escrito' },
  processStep1Bullet3: { en: 'Material & style options reviewed', es: 'Opciones de material y estilo revisadas' },
  processStep2Num: { en: '02', es: '02' },
  processStep2Title: { en: 'Expert Installation', es: 'Instalacion Experta' },
  processStep2Desc: { en: 'Skilled technicians arrive on time with everything needed to complete your gutter project efficiently, cleanly, and to the highest quality standards.', es: 'Tecnicos calificados llegan a tiempo con todo lo necesario para completar su proyecto de canaletas de manera eficiente, limpia y con los mas altos estandares de calidad.' },
  processStep2Bullet1: { en: 'Precise custom measurements & fitting', es: 'Mediciones y ajustes personalizados precisos' },
  processStep2Bullet2: { en: 'Clean, efficient workmanship', es: 'Mano de obra limpia y eficiente' },
  processStep2Bullet3: { en: 'Same-day completion on most jobs', es: 'Terminacion el mismo dia en la mayoria de trabajos' },
  processStep3Num: { en: '03', es: '03' },
  processStep3Title: { en: 'Warranty & Ongoing Support', es: 'Garantia y Soporte Continuo' },
  processStep3Desc: { en: 'We stand behind every job with industry-leading warranties and offer maintenance plans to keep your gutters performing perfectly year after year.', es: 'Respaldamos cada trabajo con garantias lideres en la industria y ofrecemos planes de mantenimiento para mantener sus canaletas funcionando perfectamente ano tras ano.' },
  processStep3Bullet1: { en: '2-Year Labor Warranty included', es: 'Garantia de 2 anos en mano de obra incluida' },
  processStep3Bullet2: { en: '20-Year Material Warranty', es: 'Garantia de 20 anos en materiales' },
  processStep3Bullet3: { en: 'Annual maintenance plans available', es: 'Planes de mantenimiento anual disponibles' },

  // Why Choose Us
  whyTitle: { en: 'Why Choose Us', es: 'Por Que Elegirnos' },
  whyInstallTitle: { en: 'Professional Installation', es: 'Instalacion Profesional' },
  whyInstallDesc: { en: 'Skilled professionals delivering quality workmanship', es: 'Profesionales calificados que brindan mano de obra de calidad' },
  whyMaterialsTitle: { en: 'Durable Materials', es: 'Materiales Duraderos' },
  whyMaterialsDesc: { en: 'High-quality materials built to last', es: 'Materiales de alta calidad construidos para durar' },
  whyWarrantyTitle: { en: 'Warranty Included', es: 'Garantia Incluida' },
  whyWarrantyDesc: { en: '2-Year Labor Warranty / 20-Year Material Warranty', es: 'Garantia de 2 Anos en Mano de Obra / 20 Anos en Materiales' },

  // LeadForm
  formTitle: { en: 'Get Your Free Estimate', es: 'Obtenga Su Presupuesto Gratis' },
  formDesc: { en: 'Fast, reliable gutter services you can trust. Request your free quote today.', es: 'Servicios rapidos y confiables de canaletas en los que puede confiar. Solicite su presupuesto gratis hoy.' },
  formHours: { en: 'Mon - Sat: 8am - 6pm', es: 'Lun - Sab: 8am - 6pm' },
  formNameLabel: { en: 'Full Name', es: 'Nombre Completo' },
  formNamePlaceholder: { en: 'John Doe', es: 'Juan Perez' },
  formPhoneLabel: { en: 'Phone Number', es: 'Telefono' },
  formEmailLabel: { en: 'Email Address', es: 'Correo Electronico' },
  formEmailPlaceholder: { en: 'you@example.com', es: 'usted@ejemplo.com' },
  formServiceLabel: { en: 'Service Needed', es: 'Servicio Requerido' },
  formServicePlaceholder: { en: 'Select a service', es: 'Seleccione un servicio' },
  formOptInstall: { en: 'Gutter Installation', es: 'Instalacion de Canaletas' },
  formOptGuard: { en: 'Leaf Guard Installation', es: 'Instalacion de Protectores' },
  formOptRepair: { en: 'Gutter Repair', es: 'Reparacion de Canaletas' },
  formOptClean: { en: 'Gutter Cleaning', es: 'Limpieza de Canaletas' },
  formSubmit: { en: 'Get My Free Quote', es: 'Obtener Mi Presupuesto' },
  formPrivacy: { en: 'We respect your privacy. Your information will not be shared.', es: 'Respetamos su privacidad. Su informacion no sera compartida.' },

  // About Us
  aboutUsTitle: { en: 'About Us', es: 'Sobre Nosotros' },
  aboutUsText: { en: 'Integral Solutions Gutters is a South Florida company dedicated to providing professional gutter installation, gutter cleaning, repairs, and exterior maintenance services for residential and commercial properties. We take pride in delivering dependable service, high-quality materials, and professional workmanship on every project. Our goal is to help protect properties from water damage while improving curb appeal and maintaining clean, efficient drainage systems. With attention to detail and commitment to customer satisfaction, we strive to build long-term relationships with every client we serve.', es: 'Integral Solutions Gutters es una empresa del Sur de Florida dedicada a brindar servicios profesionales de instalacion de canaletas, limpieza, reparaciones y mantenimiento exterior para propiedades residenciales y comerciales. Nos enorgullecemos de ofrecer servicio confiable, materiales de alta calidad y mano de obra profesional en cada proyecto. Nuestro objetivo es ayudar a proteger las propiedades de danos por agua mientras mejoramos la apariencia y mantenemos sistemas de drenaje limpios y eficientes. Con atencion al detalle y compromiso con la satisfaccion del cliente, nos esforzamos por construir relaciones a largo plazo con cada cliente que servimos.' },
  missionTitle: { en: 'Our Mission', es: 'Nuestra Mision' },
  missionText: { en: 'Our mission is to provide professional, reliable, and high-quality gutter and exterior maintenance services that protect and enhance our clients\' properties while delivering exceptional customer service and dependable results.', es: 'Nuestra mision es brindar servicios profesionales, confiables y de alta calidad de canaletas y mantenimiento exterior que protejan y mejoren las propiedades de nuestros clientes, ofreciendo un servicio excepcional y resultados confiables.' },
  visionTitle: { en: 'Our Vision', es: 'Nuestra Vision' },
  visionText: { en: 'Our vision is to become one of the most trusted gutter and exterior service companies in South Florida by consistently providing quality workmanship, professionalism, and customer satisfaction.', es: 'Nuestra vision es convertirnos en una de las empresas de servicios de canaletas y exteriores mas confiables del Sur de Florida al brindar consistentemente mano de obra de calidad, profesionalismo y satisfaccion del cliente.' },

  // Footer
  footerDesc: { en: 'Professional gutter solutions that protect your home and prevent costly damage.', es: 'Soluciones profesionales de canaletas que protegen su hogar y previenen danos costosos.' },
  footerQuickLinks: { en: 'Quick Links', es: 'Enlaces Rapidos' },
  footerContact: { en: 'Contact Information', es: 'Informacion de Contacto' },
  footerLocation: { en: 'Serving South Florida', es: 'Sirviendo el Sur de Florida' },
  footerSocial: { en: 'Follow us on social media', es: 'Siguenos en redes sociales' },
  footerCopyright: { en: '\u00A9 2026 Integral Solutions Gutters. All Rights Reserved.', es: '\u00A9 2026 Integral Solutions Gutters. Todos los Derechos Reservados.' },

  // Gallery
  galTitle: { en: 'Our Work', es: 'Nuestro Trabajo' },
  galSubtitle: { en: 'Browse our portfolio of completed gutter projects across South Florida.', es: 'Explore nuestro portafolio de proyectos de canaletas completados en el sur de Florida.' },
  galCta: { en: 'Get a Free Estimate for Your Home', es: 'Obtenga un Presupuesto Gratis para Su Hogar' },
  galCatAll: { en: 'All', es: 'Todos' },
  galCatInstall: { en: 'Installation', es: 'Instalacion' },
  galCatGuard: { en: 'Leaf Guard', es: 'Protectores' },
  galCatClean: { en: 'Cleaning', es: 'Limpieza' },
  galCatPremium: { en: 'Premium', es: 'Premium' },
  galLabelKStyle: { en: 'K-Style Gutters', es: 'Canaletas Estilo K' },
  galLabelHalfRound: { en: 'Half Round Gutters', es: 'Canaletas Semicirculares' },
  galLabelSquare: { en: 'European Square Gutters', es: 'Canaletas Cuadradas Europeas' },
  galLabelGuard: { en: 'Leaf Guard', es: 'Protector de Hojas' },
  galLabelClean: { en: 'Gutter Cleaning', es: 'Limpieza de Canaletas' },
  galLabelCopper: { en: 'Copper Gutters', es: 'Canaletas de Cobre' },

  // Mobile Nav
  mobileHome: { en: 'Home', es: 'Inicio' },
  mobileServices: { en: 'Services', es: 'Servicios' },
  mobileAbout: { en: 'About', es: 'Nosotros' },
  mobileContact: { en: 'Contact', es: 'Contacto' },
}
