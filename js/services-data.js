const CATEGORIES = [
  { id: "todos", name: "Todos los Servicios", icon: "sparkles" },
  { id: "faciales", name: "Tratamientos Faciales", icon: "face" },
  { id: "corporales", name: "Cuidado Corporal", icon: "body" },
  { id: "antiedad", name: "Rejuvenecimiento", icon: "clock" },
  { id: "masajes", name: "Masajes & Relax", icon: "spa" },
  { id: "promociones", name: "Paquetes & Promos", icon: "tag" },
];

const SERVICES_DATA = [
  {
    id: "fac-1",
    title: "Depilación láser",
    category: "corporales",
    categoryName: "Tratamientos Faciales / Corporales",
    shortDescription:
    "Dile adiós al vello para siempre y recupera tu libertad.",
    fullDescription:
    "¿Te imaginas despertarte cada mañana sin preocuparte por depilarte? Con nuestro sistema de depilación láser diodo, la piel suave y perfecta ya no es un deseo de un día, sino tu nueva realidad.",
    price: "$2,200 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img9.jpeg",
    badge: "Más Popular",
    benefits: [
      "Resultados desde la primera sesión",
      "Sin dolor y con maxima comodidad",
      "Apto para todas las pieles",
      "Adios a la foliculitis",
    ],
    recommendations:
    "",
  },
  {
    id: "fac-2",
    title: "Limpieza profunda",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
    "Hidrodermoabrasión con sueros nutritivos, péptidos y terapia de luz LED revitalizante.",
    fullDescription:
    "Incluye: Limpieza, exfoliación, apertura de poros, extracción de impurezas, mascarilla, hidratante y protector solar.",
    price: "$2,200 MXN",
    priceNumber: 0,
    duration: "75 min",
    image: "assets/images/img1.jpeg",
    badge: "Más Popular",
    benefits: [
      "Limpieza, exfoliación e hidratación simultánea sin dolor",
      'Efecto "Glow" iluminador instantáneo previa a eventos',
      "Fototerapia LED antiedad o antibacteriana",
      "Reducción visible de poros dilatados y finas líneas",
    ],
    recommendations:
    "Ideal antes de eventos especiales o como mantenimiento mensual antiedad.",
  },
  {
    id: "fac-3",
    title: "Anti acné",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
      "Exfoliación médica suave con alfa y beta hidroxiácidos para unificar el tono y atenuar manchas.",
    fullDescription:
      "Tratamiento especializado con ácidos dermatológicos (mándelico, glicólico o salicílico) seleccionados a la medida de tu piel. Estimula la renovación celular profunda, ayuda a desvanecer manchas de sol o acné y atenúa líneas de expresión.",
    price: "$2,200 MXN",
    priceNumber: 1100,
    duration: "50 min",
    image: "assets/images/img2.jpeg",
    badge: "Recomendado",
    benefits: [
      "Atenuación de hiperpigmentación y manchas solares",
      "Regulación de la producción de sebo en pieles grasas",
      "Textura de la piel visiblemente más lisa y uniforme",
      "Estimulación de síntesis de colágeno nuevo",
    ],
    recommendations:
      "Uso obligatorio de bloqueador solar post-tratamiento. Evitar exposición solar directa durante 5 días.",
  },
  {
    id: "fac-4",
    title: "Rejuvenecimiento",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
    "Micropunción eléctrica con sueros de factores de crecimiento y vitaminas biológicas.",
    fullDescription:
    "Dispositivo médico de microagujas estériles que genera microcanales en la piel para penetrar principios activos concentrated (ácido hialurónico, péptidos y vitamina C). Estimula la regeneración cutánea, reduce cicatrices de acné y disminuye arrugas.",
    price: "$2,200 MXN",
    priceNumber: 0,
    duration: "75 min",
    image: "assets/images/img13.jpeg",
    badge: "Alta Eficacia",
    benefits: [
      "Regeneración profunda de la matriz extracelular",
      "Disminución de cicatrices, marcas de acné y poros",
      "Aumento significativo de la densidad y firmeza cutánea",
      "Incluye mascarilla descongestiva de biocelulosa",
    ],
    recommendations:
    "Requiere anestesia tópica suave. Evitar maquillaje y sol durante 48 horas post-sesión.",
  },
  {
    id: "fac-5",
    title: "Antimanchas",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
      "Técnica holística con utensilios de madera nobles y vacumterapia para alisar la piel de naranja.",
    fullDescription:
      "Combina el masaje de maderoterapia anatómica con sueros reafirmantes y copa sueca de vacumterapia. Activa la microcirculación, rompe los depósitos de celulitis y tonifica la piel de piernas y glúteos.",
    price: "$900 MXN",
    priceNumber: 900,
    duration: "60 min",
    image: "assets/images/img7.jpeg",
    badge: null,
    benefits: [
      "Disminución visible del aspecto de piel de naranja",
      "Efecto reafirmante y moldeador de glúteos y piernas",
      "Alivio de la sensación de piernas cansadas",
      "Drenaje venoso y linfático profundo",
    ],
    recommendations:
      "Se recomienda paquete de 6 a 8 sesiones para resultados óptimos a largo plazo.",
  },
  {
    id: "fac-6",
    title: "Hidratación intensa",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
      "Ritual renovador con sales de mar, manteca de karité y envoltura nutri-reparadora.",
    fullDescription:
      "Experiencia multisensorial que inicia con una exfoliación corporal completa con sales aromáticas y aceites botánicos para retirar células muertas. Continúa con una envoltura nutritiva corporal e hidratación intensiva mediante un suave masaje sellador.",
    price: "$1,200 MXN",
    priceNumber: 1200,
    duration: "75 min",
    image: "assets/images/img5.jpeg",
    badge: null,
    benefits: [
      "Piel extremadamente suave, nutrida e hidratada",
      "Sensación de ligereza y descanso generalizado",
      "Unificación del tono de la piel del cuerpo",
      "Ideal antes de la temporada de playa o sol",
    ],
    recommendations: "Tratamiento perfecto previo a eventos o vacaciones.",
  },
  {
    id: "fac-7",
    title: "Microneedling facial",
    category: "faciales",
    categoryName: "Microneedling",
    shortDescription:
      "Estímulo térmico profundo para tensado inmediato y producción intensiva de elastina.",
    fullDescription:
      "Tratamiento no invasivo que utiliza ondas electromagnéticas para calentar suavemente las capas profundas de la dermis. Estimula la contracción del colágeno existente y la producción de nuevas fibras, logrando un notable efecto tensor en rostro, cuello y escote.",
    price: "$1,300 MXN",
    priceNumber: 1300,
    duration: "60 min",
    image: "assets/images/img15.jpeg",
    badge: "Lifting Sin Cirugía",
    benefits: [
      "Efecto tensor e iluminador de aplicación inmediata",
      "Reducción de la flacidez en papada y óvalo facial",
      "Atenuación de surcos nasogenianos y patas de gallo",
      "Procedimiento totalmente indoloro y relajante",
    ],
    recommendations:
      "Para un efecto prolongado se sugieren 4 a 6 sesiones quincenales.",
  },
  {
    id: "fac-8",
    title: "Piel de porcelana (efecto BB Glow)",
    category: "faciales",
    categoryName: "Microneedling",
    shortDescription:
      "Micropunción eléctrica con sueros de factores de crecimiento y vitaminas biológicas.",
    fullDescription:
      "Dispositivo médico de microagujas estériles que genera microcanales en la piel para penetrar principios activos concentrated (ácido hialurónico, péptidos y vitamina C). Estimula la regeneración cutánea, reduce cicatrices de acné y disminuye arrugas.",
    price: "$1,650 MXN",
    priceNumber: 1650,
    duration: "75 min",
    image: "assets/images/img11.jpeg",
    badge: "Alta Eficacia",
    benefits: [
      "Regeneración profunda de la matriz extracelular",
      "Disminución de cicatrices, marcas de acné y poros",
      "Aumento significativo de la densidad y firmeza cutánea",
      "Incluye mascarilla descongestiva de biocelulosa",
    ],
    recommendations:
      "Requiere anestesia tópica suave. Evitar maquillaje y sol durante 48 horas post-sesión.",
  },
  {
    id: "fac-9",
    title: "BB Lips (efecto volumen y color)",
    category: "faciales",
    categoryName: "Microneedling",
    shortDescription:
      "Terapia muscular focalizada para liberar tensiones severas en espalda, cuello y hombros.",
    fullDescription:
      "Masaje de intensidad media-alta diseñado para disolver nudos musculares y contracturas provocadas por estrés, mala postura o trabajo físico. Utiliza aceites esenciales desinflamatorios como árnica y eucalipto.",
    price: "$950 MXN",
    priceNumber: 950,
    duration: "60 min",
    image: "assets/images/img3.jpeg",
    badge: null,
    benefits: [
      "Alivio eficaz de dolores musculares en zona cérvico-dorsal",
      "Recuperación de la movilidad y amplitud articular",
      "Sensación de alivio y ligereza inmediata",
      "Uso de termoterapia con compresas calientes",
    ],
    recommendations:
      "Combinar con estiramientos diarios y buena hidratación post-masaje.",
  },
  {
    id: "corp-1",
    title: "Eliminación de estrías",
    category: "corporal",
    categoryName: "Corporal",
    shortDescription:
      "Ritual corporal suave con aceites de lavanda y velas calientes de masaje.",
    fullDescription:
      "Inmersión de paz y relajación total. Manipulaciones fluidas y envolventes que abarcan todo el cuerpo desde los pies hasta la cabeza. Acompañado de música armoniosa, aromaterapia orgánica y aplicación de aceite tibio de velas cosmetológicas de karité.",
    price: "$890 MXN",
    priceNumber: 890,
    duration: "60 min",
    image: "assets/images/img8.jpeg",
    badge: "Favorito",
    benefits: [
      "Reducción drástica de niveles de estrés y ansiedad",
      "Mejora de la calidad del sueño y descanso nocturno",
      "Nutrición e hidratación para la piel del cuerpo",
      "Desconexión mental en ambiente de spa climatizado",
    ],
    recommendations:
      "Ideal al finalizar una semana intensa de trabajo o como autoregalo de bienestar.",
  },
  {
    id: "corp-2",
    title: "Eliminación de cicatrices",
    category: "corporal",
    categoryName: "Corporal",
    shortDescription:
      "Terapia geotermal con piedras compuestas de basalto para una relajación profunda.",
    fullDescription:
      "Técnica milenaria donde se colocan y deslizan piedras volcánicas pulidas a temperatura constante en puntos energéticos clave del cuerpo. El calor penetra profundamente en las fibras musculares brindando un relax sin igual.",
    price: "$1,100 MXN",
    priceNumber: 1100,
    duration: "75 min",
    image: "assets/images/img4.jpeg",
    badge: null,
    benefits: [
      "Alivio profundo del dolor muscular por termoterapia",
      "Equilibrio energético de los centros corporales",
      "Estimulación del sistema circulatorio y drenaje",
      "Sensación placentera de calidez constante",
    ],
    recommendations:
      "No recomendado en personas con problemas vasculares severos o fiebre.",
  },
  {
    id: "corp-3",
    title: "Retiro de verrugas",
    category: "corporal",
    categoryName: "Corporal",
    shortDescription:
      "Combo exclusivo de Limpieza Facial Profunda + Masaje Relajante Holístico.",
    fullDescription:
      "El paquete estrella de CMP SPA. Disfruta de 2 horas completas de indulgencia total: primero realizamos una Limpieza Facial Profunda Premium con mascarilla iluminadora y continuamos con un Masaje Relajante Holístico de cuerpo completo con aromaterapia.",
    price: "$1,490 MXN",
    priceNumber: 1490,
    duration: "120 min",
    image: "assets/images/img6.jpeg",
    badge: null,
    benefits: [
      "Tratamiento completo facial y corporal en una sola visita",
      "Incluye copa de cortesía (té relajante o mimosa)",
      "Ahorro especial respecto a los servicios por separado",
      "Regalo especial de producto viajero para el cuidado facial",
    ],
    recommendations:
      "Ideal para días de spa individual, regalo de cumpleaños o anniversarios.",
  },
  {
    id: "corp-4",
    title: "Renacimiento folicular",
    category: "corporal",
    categoryName: "Corporal",
    shortDescription:
      "Experiencia compartida de masaje relajante + mini facial hidratante para parejas o amigas.",
    fullDescription:
      "Comparte un momento inolvidable de desconexión en nuestra cabina doble decorada especialmente. Incluye masaje aromático simultáneo de 50 minutos para dos personas más un velo de hidratación facial exprés.",
    price: "$2,200 MXN",
    priceNumber: 2200,
    duration: "90 min",
    image: "assets/images/img10.jpeg",
    badge: "Más popular",
    benefits: [
      "Atención en cabina doble ambientada para dos personas",
      "Copa de vino de honor o infusión de la casa con bocadillos",
      "Masaje relajante corporal + tratamiento facial hidratante",
      "Recuerdo fotográfico digital del día",
    ],
    recommendations: "Reserva previa de al menos 48 horas requerida.",
  },
];

// Configuración general de la Clínica
const CLINIC_INFO = {
  name: "CMP SPA",
  tagline: "BELLEZA • BIENESTAR • EQUILIBRIO",
  phone: "+525662850515",
  whatsapp: "525662850515", // Reemplazar con tu número de WhatsApp con código de país sin +
  whatsappMessage:
    "Hola CMP SPA, me gustaría agendar el servicio: ",
  whatsappDefaultMsg:
    "Hola CMP SPA, me gustaría solicitar información sobre sus servicios.",
  address:
    "Av. Sor Juana #597 casi esquina con Cielito Lindo, Col. Benito Juárez, 57000, Cd. Nezahualcóyotl, Edo. de México.",
  email: "",
  schedule:
    "Lunes a Viernes: 9:00 AM - 8:00 PM | Servicio disponible solo con cita previa",
  socials: {
    instagram: "https://instagram.com/cmpspa",
    facebook: "https://facebook.com/cmpspa",
    whatsapp: "https://wa.me/525512345678",
  },
};
