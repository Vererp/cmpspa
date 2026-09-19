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
    title: "Limpieza Facial Profunda Premium",
    category: "faciales",
    categoryName: "Tratamientos Faciales",
    shortDescription:
      "Higienización cutánea integral con vaporozono, exfoliación ultrasónica y mascarilla de colágeno.",
    fullDescription:
      "Un tratamiento facial exhaustivo diseñado para desintoxicar la piel, remover células muertas, puntos negros e impurezas acumuladas. Incluye diagnóstico digital de la piel, vaporozono desincrustante, extracción manual minuciosa, pala ultrasónica, alta frecuencia antiséptica y un masaje facial drenante acompañado de mascarilla hidroplástica según tu tipo de piel.",
    price: "$850 MXN",
    priceNumber: 850,
    duration: "60 min",
    image: "assets/images/facial-limpieza.svg",
    badge: "Más Popular",
    benefits: [
      "Desobstrucción profunda de poros y eliminación de puntos negros",
      "Mascarilla de nutrición e hidratación según tipo de piel",
      "Aplicación de alta frecuencia para oxigenación cutánea",
      "Mejora inmediata de la textura y luminosidad facial",
    ],
    recommendations:
      "Recomendado realizar cada 21 a 30 días para mantener la salud y frescura del rostro.",
  },
  {
    id: "fac-2",
    title: "HydraFacial Glow & Rejuvenecimiento",
    category: "faciales",
    categoryName: "Tratamientos Faciales",
    shortDescription:
      "Hidradermoabrasión con sueros nutritivos, péptidos y terapia de luz LED revitalizante.",
    fullDescription:
      "La tecnología más avanzada en renovación facial. Combina la exfoliación por vórtice de agua con la infusión profunda de sueros ricos en ácido hialurónico, antioxidantes y péptidos regeneradores. Finaliza con fototerapia LED para estimular la producción natural de colágeno.",
    price: "$1,400 MXN",
    priceNumber: 1400,
    duration: "75 min",
    image: "assets/images/facial-hydra.svg",
    badge: "Recomendado",
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
    title: "Peeling Químico Renovador Cutáneo",
    category: "faciales",
    categoryName: "Tratamientos Faciales",
    shortDescription:
      "Exfoliación médica suave con alfa y beta hidroxiácidos para unificar el tono y atenuar manchas.",
    fullDescription:
      "Tratamiento especializado con ácidos dermatológicos (mándelico, glicólico o salicílico) seleccionados a la medida de tu piel. Estimula la renovación celular profunda, ayuda a desvanecer manchas de sol o acné y atenúa líneas de expresión.",
    price: "$1,100 MXN",
    priceNumber: 1100,
    duration: "50 min",
    image: "assets/images/facial-peeling.svg",
    badge: null,
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
    id: "corp-1",
    title: "Modelado Corporal & Cavitación / Radiofrecuencia",
    category: "corporales",
    categoryName: "Cuidado Corporal",
    shortDescription:
      "Reducción de medidas mediante ultracavitación, radiofrecuencia y drenaje linfático asistido.",
    fullDescription:
      "Sesión integral para moldear la silueta y combatir la grasa localizada en abdomen, cintura, brazos o muslos. La ultracavitación rompe los adipocitos, mientras que la radiofrecuencia tensa la piel y el drenaje linfático moviliza las toxinas para su eliminación natural.",
    price: "$950 MXN",
    priceNumber: 950,
    duration: "60 min",
    image: "assets/images/corp-modelado.svg",
    badge: "Efectivo",
    benefits: [
      "Reducción focalizada de adiposidad rebelde",
      "Estimulación del colágeno para firmeza cutánea",
      "Mejora de la circulación y eliminación de retención de líquidos",
      "Sesiones personalizadas por zona de interés",
    ],
    recommendations:
      "Beber al menos 2 litros de agua el día del tratamiento para facilitar la eliminación de toxinas.",
  },
  {
    id: "corp-2",
    title: "Tratamiento Anticelulítico & Maderoterapia",
    category: "corporales",
    categoryName: "Cuidado Corporal",
    shortDescription:
      "Técnica holística con utensilios de madera nobles y vacumterapia para alisar la piel de naranja.",
    fullDescription:
      "Combina el masaje de maderoterapia anatómica con sueros reafirmantes y copa sueca de vacumterapia. Activa la microcirculación, rompe los depósitos de celulitis y tonifica la piel de piernas y glúteos.",
    price: "$900 MXN",
    priceNumber: 900,
    duration: "60 min",
    image: "assets/images/corp-madero.svg",
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
    id: "corp-3",
    title: "Exfoliación Corporal Hidratante & Envoltura Spa",
    category: "corporales",
    categoryName: "Cuidado Corporal",
    shortDescription:
      "Ritual renovador con sales de mar, manteca de karité y envoltura nutri-reparadora.",
    fullDescription:
      "Experiencia multisensorial que inicia con una exfoliación corporal completa con sales aromáticas y aceites botánicos para retirar células muertas. Continúa con una envoltura nutritiva corporal e hidratación intensiva mediante un suave masaje sellador.",
    price: "$1,200 MXN",
    priceNumber: 1200,
    duration: "75 min",
    image: "assets/images/corp-exfoliacion.svg",
    badge: "Relax VIP",
    benefits: [
      "Piel extremadamente suave, nutrida e hidratada",
      "Sensación de ligereza y descanso generalizado",
      "Unificación del tono de la piel del cuerpo",
      "Ideal antes de la temporada de playa o sol",
    ],
    recommendations: "Tratamiento perfecto previo a eventos o vacaciones.",
  },
  {
    id: "ant-1",
    title: "Radiofrecuencia Facial Tripolar / Efecto Lifting",
    category: "antiedad",
    categoryName: "Rejuvenecimiento",
    shortDescription:
      "Estímulo térmico profundo para tensado inmediato y producción intensiva de elastina.",
    fullDescription:
      "Tratamiento no invasivo que utiliza ondas electromagnéticas para calentar suavemente las capas profundas de la dermis. Estimula la contracción del colágeno existente y la producción de nuevas fibras, logrando un notable efecto tensor en rostro, cuello y escote.",
    price: "$1,300 MXN",
    priceNumber: 1300,
    duration: "60 min",
    image: "assets/images/antiedad-radio.svg",
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
    id: "ant-2",
    title: "Dermapen / Microneedling con Ácido Hialurónico",
    category: "antiedad",
    categoryName: "Rejuvenecimiento",
    shortDescription:
      "Micropunción eléctrica con sueros de factores de crecimiento y vitaminas biológicas.",
    fullDescription:
      "Dispositivo médico de microagujas estériles que genera microcanales en la piel para penetrar principios activos concentrated (ácido hialurónico, péptidos y vitamina C). Estimula la regeneración cutánea, reduce cicatrices de acné y disminuye arrugas.",
    price: "$1,650 MXN",
    priceNumber: 1650,
    duration: "75 min",
    image: "assets/images/antiedad-dermapen.svg",
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
    id: "mas-1",
    title: "Masaje Descontracturante Profundo",
    category: "masajes",
    categoryName: "Masajes & Relax",
    shortDescription:
      "Terapia muscular focalizada para liberar tensiones severas en espalda, cuello y hombros.",
    fullDescription:
      "Masaje de intensidad media-alta diseñado para disolver nudos musculares y contracturas provocadas por estrés, mala postura o trabajo físico. Utiliza aceites esenciales desinflamatorios como árnica y eucalipto.",
    price: "$950 MXN",
    priceNumber: 950,
    duration: "60 min",
    image: "assets/images/masaje-descontracturante.svg",
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
    id: "mas-2",
    title: "Masaje Relajante Holístico con Aromaterapia",
    category: "masajes",
    categoryName: "Masajes & Relax",
    shortDescription:
      "Ritual corporal suave con aceites de lavanda y velas calientes de masaje.",
    fullDescription:
      "Inmersión de paz y relajación total. Manipulaciones fluidas y envolventes que abarcan todo el cuerpo desde los pies hasta la cabeza. Acompañado de música armoniosa, aromaterapia orgánica y aplicación de aceite tibio de velas cosmetológicas de karité.",
    price: "$890 MXN",
    priceNumber: 890,
    duration: "60 min",
    image: "assets/images/masaje-relajante.svg",
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
    id: "mas-3",
    title: "Masaje con Piedras Volcánicas Calientes",
    category: "masajes",
    categoryName: "Masajes & Relax",
    shortDescription:
      "Terapia geotermal con piedras compuestas de basalto para una relajación profunda.",
    fullDescription:
      "Técnica milenaria donde se colocan y deslizan piedras volcánicas pulidas a temperatura constante en puntos energéticos clave del cuerpo. El calor penetra profundamente en las fibras musculares brindando un relax sin igual.",
    price: "$1,100 MXN",
    priceNumber: 1100,
    duration: "75 min",
    image: "assets/images/masaje-piedras.svg",
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
    id: "pro-1",
    title: "Paquete Glow Ritual: Facial Premium + Masaje Relax",
    category: "promociones",
    categoryName: "Paquetes & Promociones",
    shortDescription:
      "Combo exclusivo de Limpieza Facial Profunda + Masaje Relajante Holístico.",
    fullDescription:
      "El paquete estrella de CMP SPA. Disfruta de 2 horas completas de indulgencia total: primero realizamos una Limpieza Facial Profunda Premium con mascarilla iluminadora y continuamos con un Masaje Relajante Holístico de cuerpo completo con aromaterapia.",
    price: "$1,490 MXN",
    priceNumber: 1490,
    duration: "120 min",
    image: "assets/images/combo-glow.svg",
    badge: "Ahorra 18%",
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
    id: "pro-2",
    title: "Paquete Dúo Relax Spa (Para 2 Personas)",
    category: "promociones",
    categoryName: "Paquetes & Promociones",
    shortDescription:
      "Experiencia compartida de masaje relajante + mini facial hidratante para parejas o amigas.",
    fullDescription:
      "Comparte un momento inolvidable de desconexión en nuestra cabina doble decorada especialmente. Incluye masaje aromático simultáneo de 50 minutos para dos personas más un velo de hidratación facial exprés.",
    price: "$2,200 MXN",
    priceNumber: 2200,
    duration: "90 min",
    image: "assets/images/combo-duo.svg",
    badge: "Edición Dúo",
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
