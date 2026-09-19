# CMP SPA - Sitio Web Estético & Responsivo

Este repositorio contiene la estructura completa del sitio web para **CMP SPA**, una clínica especializada en cuidado facial, tratamientos corporales y masajes de relajación. Diseñado específicamente para ser alojado de forma gratuita y rápida en **GitHub Pages**.

---

## 🌟 Características Incluidas

1. **Diseño Moderno & Elegante**: Estética de lujo ajustada a la identidad visual de la clínica (con tonos dorado, carbón y crema).
2. **Base de Datos en Objetos JavaScript (`js/services-data.js`)**: Facilidad total para agregar, editar o eliminar servicios, precios, tiempos de duración, descripciones e imágenes de forma manual sin tocar la maqueta HTML.
3. **Buscador en Tiempo Real**: Barra de búsqueda interactiva que filtra instantáneamente por nombre de tratamiento, descripción, beneficios y categorías.
4. **Filtro por Categorías con Tabs**: Píldoras interactivas (Faciales, Corporales, Rejuvenecimiento, Masajes, Promociones).
5. **Modal de Detalles del Servicio**: Popup informativo completo con recomendaciones, lista de beneficios con íconos y botón directo para agendar el servicio por WhatsApp.
6. **Formulario de Agendamiento Directo a WhatsApp**: Selección dinámica del tratamiento que envía los datos prellenados al WhatsApp de la clínica.
7. **Botón Flotante de WhatsApp**: Con animación y tooltip informativo.
8. **Sección de Preguntas Frecuentes (FAQ)**: Acordeón desplegable fluido.
9. **Totalmente Responsivo & Optimizado**: Adaptado a móviles, tablets y computadoras con animaciones fluidas al hacer scroll.

---

## 🚀 Cómo Publicar en GitHub Pages

1. **Crear o Subir el Repositorio a GitHub**:
   - Ve a [GitHub](https://github.com/) y crea un nuevo repositorio (por ejemplo, `cmp-spa`).
   - Sube o haz `git push` de todos los archivos de esta carpeta a la rama `main` o `master`.

2. **Activar GitHub Pages**:
   - En tu repositorio de GitHub, ve a **Settings** (Configuración) > **Pages**.
   - En **Source**, selecciona `Deploy from a branch`.
   - Selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).

3. **¡Listo!**: En pocos minutos tu sitio estará en vivo en una URL como:
   `https://tu-usuario.github.io/cmp-spa/`

---

## ✏️ Cómo Personalizar Servicios, Precios e Información

Toda la información del sitio se gestiona en un solo archivo: `js/services-data.js`.

### 1. Modificar la Información de la Clínica
Abre `js/services-data.js` y busca el objeto `CLINIC_INFO` al final del archivo:

```javascript
const CLINIC_INFO = {
  name: "CMP SPA",
  tagline: "BELLEZA • BIENESTAR • EQUILIBRIO",
  phone: "+52 55 1234 5678",
  whatsapp: "525512345678", // Reemplaza con tu número con clave de país sin '+'
  address: "Av. Paseo de la Reforma 300, Polanco, Ciudad de México",
  email: "contacto@cmpspa.com",
  schedule: "Lunes a Sábado: 9:00 AM - 8:00 PM | Domingos: 10:00 AM - 4:00 PM"
};
```

### 2. Agregar un Nuevo Servicio
En `js/services-data.js`, añade un nuevo objeto al arreglo `SERVICES_DATA`:

```javascript
{
  id: 'fac-4',
  title: 'Nombre de tu Nuevo Servicio',
  category: 'faciales', // Claves válidas: 'faciales', 'corporales', 'antiedad', 'masajes', 'promociones'
  categoryName: 'Tratamientos Faciales',
  shortDescription: 'Resumen corto que aparece en la tarjeta del servicio.',
  fullDescription: 'Descripción larga y detallada que se muestra al abrir el modal.',
  price: '$950 MXN',
  priceNumber: 950,
  duration: '60 min',
  image: 'assets/images/tu-nueva-imagen.jpg',
  badge: 'Nuevo', // O null si no quieres etiqueta
  benefits: [
    'Beneficio 1',
    'Beneficio 2',
    'Beneficio 3'
  ],
  recommendations: 'Consejos de aplicación o cuidados post-tratamiento.'
}
```

### 3. Reemplazar Imágenes
Puedes reemplazar las imágenes ubicadas en la carpeta `assets/images/` por tus propias fotografías en formato `.jpg`, `.png` o `.webp`, actualizando la propiedad `image` en el archivo `js/services-data.js`.

---

## 📁 Estructura del Proyecto

```
vere/
├── index.html            # Estructura principal HTML5
├── logo.jpg              # Logotipo oficial de CMP SPA
├── .nojekyll             # Archivo para bypass de Jekyll en GitHub Pages
├── README.md             # Manual de uso y despliegue
├── css/
│   └── styles.css        # Hoja de estilos de lujo, animaciones y responsive
├── js/
│   ├── services-data.js  # Base de datos de servicios y configuración
│   └── app.js            # Lógica interactiva, buscador, filtros y modales
└── assets/
    └── images/           # Carpeta de imágenes de tratamientos
```
