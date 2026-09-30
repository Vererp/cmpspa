const CATEGORIES = [
  { id: "todos", name: "Todos los servicios", icon: "sparkles" },
  { id: "faciales", name: "Tratamientos faciales", icon: "face" },
  { id: "corporales", name: "Cuidado corporal", icon: "body" },
  { id: "antiedad", name: "Rejuvenecimiento", icon: "clock" },
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
    "Una sesión cada 4 a 6 semanas (dependiendo de la zona). No arrancar el vello con pinzas o cera entre sesiones, evitar la exposición solar directa 3 días antes y después, y mantener la piel bien hidratada.",
  },
  {
    id: "fac-2",
    title: "Limpieza profunda",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
    "Un respiro de frescura y pureza para tu rostro.",
    fullDescription:
    "Un respiro vital para tu rostro. Liberamos tu piel de la contaminación diaria, extrayendo puntos negros, impurezas y células muertas para devolverle su brillo natural. Incluye: Limpieza, exfoliación, apertura de poros, extracción de impurezas, mascarilla, hidratante y protector solar.",
    price: "0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img1.jpeg",
    badge: "Más Popular",
    benefits: [
      "Poros limpios y minimizados",
      'Textura suave',
      "Previene brotes de acné",
      "Permite que tus productos de skincare penetren al 100%",
    ],
    recommendations:
    "Ideal antes de eventos especiales o como mantenimiento mensual antiedad. Uso obligatorio de protector solar.",
  },
  {
    id: "fac-3",
    title: "Anti acné",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
    "El equilibrio perfecto para una piel libre de brotes.",
    fullDescription:
    "Un protocolo clínico diseñado para calmar, desinflamar y controlar los brotes rebeldes. Purificamos tu piel desde adentro hacia afuera, equilibrando la producción de grasa.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img2.jpeg",
    badge: "Recomendado",
    benefits: [
      "Seca granitos activos rápidamente",
      "Reduce rojeces",
      "Elimina bacterias causantes del acné",
      "Previene marcas futuras",
    ],
    recommendations:
    "Cada 15 o 21 días en fase de control. Seguir estrictamente la rutina de apoyo en casa recomendada por nuestras especialistas.",
  },
  {
    id: "fac-4",
    title: "Rejuvenecimiento",
    category: "antiedad",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
    "La firmeza y juventud natural que tu rostro anhela.",
    fullDescription:
    "Dale a tu piel el efecto 'lifting' sin cirugías. Utilizamos aparatología y principios activos tensores para devolverle a tu rostro la firmeza y juventud que merece.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img13.jpeg",
    badge: "Alta Eficacia",
    benefits: [
      "Atenúa líneas de expresión y arrugas",
      "Mejora la flacidez facial",
      "Estimula la producción natural de colágeno y elastina",
    ],
    recommendations:
    "Ciclo inicial de 4 a 6 sesiones (cada 15 días) para resultados óptimos. Mantener una buena hidratación y aplicar crema nutritiva en casa.",
  },
  {
    id: "fac-5",
    title: "Antimanchas",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
      "La luz y uniformidad que tu cutis necesita.",
    fullDescription:
      "El secreto para un tono de piel parejito y luminoso. Tratamos manchas solares, secuelas de acné o paño (melasma) devolviendo la claridad a tu rostro.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img7.jpeg",
    badge: null,
    benefits: [
      "Unifica el tono de la piel",
      "Aporta una luminosidad increíble",
      "Difumina la hiperpigmentación de manera progresiva",
    ],
    recommendations:
      "Una sesión cada 21 a 28 días. Uso estricto de protector solar con retoque cada 3 horas. Evitar asolearse en la playa o alberca durante el tratamiento.",
  },
  {
    id: "fac-6",
    title: "Hidratación intensa",
    category: "faciales",
    categoryName: "Faciales / HydroFacial",
    shortDescription:
      "Un baño de frescura y luminosidad para tu piel.",
    fullDescription:
      "Un boost de agua y vitaminas para pieles apagadas, secas o estresadas. Ideal para prepararte antes de un evento importante o recuperarte del clima extremo.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img5.jpeg",
    badge: null,
    benefits: [
      "Devuelve la jugosidad y el 'Glow' natural",
      "Elimina la sensación de tirantez",
      "Fortalece la barrera protectora de la piel",
    ],
    recommendations: "Puede realizarse 1 vez al mes o días antes de un evento especial. Beber al menos 2 litros de agua diarios para mantener el efecto desde adentro.",
  },
  {
    id: "fac-7",
    title: "Microneedling facial",
    category: "faciales",
    categoryName: "Microneedling",
    shortDescription:
      "La renovación profunda para una textura facial perfecta.",
    fullDescription:
      "La terapia de inducción de colágeno más efectiva. Mediante microagujas, creamos canales para que los sueros penetren a profundidad y la piel se regenere por sí misma.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img15.jpeg",
    badge: "Lifting Sin Cirugía",
    benefits: [
      "Mejora radicalmente la textura de la piel",
      "Disminuye el tamaño del poro, atenúa cicatrices y líneas de expresión finas",
    ],
    recommendations:
      "Una sesión cada 3 a 4 semanas. Evitar el sol, saunas, albercas y maquillaje durante las primeras 48 horas post-tratamiento.",
  },
  {
    id: "fac-8",
    title: "Piel de porcelana (efecto BB Glow)",
    category: "faciales",
    categoryName: "Microneedling",
    shortDescription:
      "El efecto de una piel impecable y radiante siempre.",
    fullDescription:
      "Despierta todos los días con 'buena cara'. Introducimos sueros ricos en vitaminas y pigmentos naturales para lograr el efecto de una base de maquillaje ligera y duradera.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img11.jpeg",
    badge: "Alta Eficacia",
    benefits: [
      "Camufla imperfecciones, ojeras y rojeces",
      "Unifica el tono de forma inmediata",
      "Nutre la piel a profundidad",
    ],
    recommendations:
      "Paquete de 3 a 5 sesiones (cada 15 días) para que el color perdure por meses. No lavar el rostro las primeras 24 horas. Evitar exfoliantes y productos con ácidos (AHA/BHA) para prolongar el efecto.",
  },
  {
    id: "fac-9",
    title: "BB Lips (efecto volumen y color)",
    category: "faciales",
    categoryName: "Microneedling",
    shortDescription:
      "El toque de color e hidratación para labios irresistibles.",
    fullDescription:
      "Labios irresistibles, hidratados y con un toque de color natural. Combinamos micropunción con ácido hialurónico y pigmentos sutiles.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img3.jpeg",
    badge: null,
    benefits: [
      "Elimina la resequedad y cuarteaduras",
      "Da un ligero efecto de volumen por la ultra-hidratación",
      "Aporta un tono rosado o rojizo muy natural",
    ],
    recommendations:
      "2 a 3 sesiones para fijar el tono, luego retoques cada 3 a 6 meses. Aplicar bálsamo hidratante constantemente.",
  },
  {
    id: "corp-1",
    title: "Eliminación de estrías",
    category: "corporales",
    categoryName: "Tratamientos Corporales",
    shortDescription:
      "La renovación que tu cuerpo necesita para lucir uniforme.",
    fullDescription:
      "Un protocolo avanzado enfocado en regenerar el tejido roto. Ideal para difuminar estrías rojas, moradas o blancas causadas por cambios de peso o embarazos.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img8.jpeg",
    badge: "Favorito",
    benefits: [
      "Mejora la elasticidad de la zona",
      "Reduce la profundidad de la estría",
      "Difumina su color para igualarlo con la piel sana",
    ],
    recommendations:
      "Una sesión cada 3 o 4 semanas. Uso de cremas regeneradoras en casa, evitar broncear la zona mientras dure el tratamiento.",
  },
  {
    id: "corp-2",
    title: "Eliminación de cicatrices",
    category: "corporales",
    categoryName: "Tratamientos Faciales / Corporales",
    shortDescription:
      "Restaura la textura y suavidad natural de tu piel.",
    fullDescription:
      "Tratamiento reestructurante para alisar y desvanecer cicatrices de acné, quirúrgicas o accidentales, estimulando tejido nuevo.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img4.jpeg",
    badge: null,
    benefits: [
      "Aplana relieves irregulares",
      "Suaviza el tejido duro de la cicatriz",
      "Unifica la textura general de la piel",
    ],
    recommendations:
      "Una sesión cada 3 a 4 semanas. Proteger la cicatriz del sol absolutamente todo el tiempo (FPS alto o parches) para evitar que se pigmente.",
  },
  {
    id: "corp-3",
    title: "Retiro de verrugas",
    category: "corporales",
    categoryName: "Tratamientos Faciales / Corporales",
    shortDescription:
    "Una piel limpia, estética y libre de imperfecciones.",
    fullDescription:
    "Eliminación estética, segura y rapidísima de verrugas y pequeños fibromas (pellejitos) en cuello y rostro. ¡Recupera la estética de tu piel en minutos!",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img6.jpeg",
    badge: null,
    benefits: [
      "Procedimiento rápido",
      "Mejora estética inmediata",
      "Evita el roce molesto con la ropa o collares",
    ],
    recommendations:
    "Por lo general, es de única sesión (con revisión al mes). Mantener la zona limpia y seca, aplicar la pomada cicatrizante indicada y jamás arrancar las costras que se formen.",
  },
  {
    id: "corp-4",
    title: "Renacimiento folicular",
    category: "corporales",
    categoryName: "Tratamientos Corporales",
    shortDescription:
    "La fuerza y vitalidad que tu cabello necesita.",
    fullDescription:
    "Dale vida y fuerza a tu cabello. Estimulamos directamente el cuero cabelludo con microagujas y nutrientes para frenar la caída y despertar los folículos dormidos.",
    price: "$0 MXN",
    priceNumber: 0,
    duration: "60 min",
    image: "assets/images/img10.jpeg",
    badge: "Más popular",
    benefits: [
      "Frena la caída capilar",
      "Engrosa el cabello existente",
      "Estimula el nacimiento de cabello nuevo",
      "Combate la alopecia leve a moderada",
    ],
    recommendations:
    "Una sesión a la semana o cada 15 días (fase de choque), luego mantenimiento mensual. Asistir con el cabello limpio, no lavar el cabello hasta 24 horas después y evitar gorras apretadas tras la sesión.",
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
