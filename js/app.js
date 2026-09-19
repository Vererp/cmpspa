/**
 * LOGICA DE INTERACCION & RENDERIZADO - CMP SPA
 * =============================================
 * Controla la renderización dinámica de servicios, el buscador en tiempo real,
 * el filtrado por categorías, el modal de detalles, el formulario y las animaciones.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado global de la aplicación
  const state = {
    currentCategory: 'todos',
    searchQuery: '',
    filteredServices: [...SERVICES_DATA]
  };

  // Referencias a elementos del DOM
  const servicesGrid = document.getElementById('servicesGrid');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const resultsCountEl = document.getElementById('resultsCount');
  const emptyStateEl = document.getElementById('emptyState');
  const bookingServiceSelect = document.getElementById('bookingServiceSelect');

  // Modal Elements
  const serviceModal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDuration = document.getElementById('modalDuration');
  const modalDescription = document.getElementById('modalDescription');
  const modalBenefits = document.getElementById('modalBenefits');
  const modalRecommendations = document.getElementById('modalRecommendations');
  const modalBookWhatsappBtn = document.getElementById('modalBookWhatsappBtn');

  // Mobile Menu Elements
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  // Header quick search button
  const headerSearchBtn = document.getElementById('headerSearchBtn');

  /* ==========================================================================
     1. INICIALIZACION
     ========================================================================== */
  function init() {
    renderCategoryTabs();
    populateFormServiceSelect();
    applyFilters();
    setupEventListeners();
    setupScrollObserver();
  }

  /* ==========================================================================
     2. RENDERIZADO DE TABS DE CATEGORIAS
     ========================================================================== */
  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;

    categoryTabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button 
        class="tab-btn ${cat.id === state.currentCategory ? 'active' : ''}" 
        data-category="${cat.id}">
        ${cat.name}
      </button>
    `).join('');
  }

  /* ==========================================================================
     3. RENDERIZADO DE LA SELECCION EN EL FORMULARIO DE RESERVA
     ========================================================================== */
  function populateFormServiceSelect() {
    if (!bookingServiceSelect) return;

    const options = SERVICES_DATA.map(service => 
      `<option value="${service.title}">${service.title} (${service.price})</option>`
    ).join('');

    bookingServiceSelect.innerHTML = `<option value="">-- Selecciona un tratamiento --</option>` + options;
  }

  /* ==========================================================================
     4. FILTRADO Y BUSQUEDA EN TIEMPO REAL
     ========================================================================== */
  function applyFilters() {
    const query = state.searchQuery.toLowerCase().trim();

    state.filteredServices = SERVICES_DATA.filter(service => {
      // Filtro por Categoría
      const matchesCategory = state.currentCategory === 'todos' || service.category === state.currentCategory;

      // Filtro por Búsqueda (Título, Descripción, Categoría y Beneficios)
      const matchesSearch = !query || 
        service.title.toLowerCase().includes(query) ||
        service.shortDescription.toLowerCase().includes(query) ||
        service.fullDescription.toLowerCase().includes(query) ||
        service.categoryName.toLowerCase().includes(query) ||
        service.benefits.some(b => b.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    renderServicesGrid();
    updateResultsCount();
  }

  /* ==========================================================================
     5. RENDERIZADO DE TARJETAS DE SERVICIOS
     ========================================================================== */
  function renderServicesGrid() {
    if (!servicesGrid) return;

    if (state.filteredServices.length === 0) {
      servicesGrid.style.display = 'none';
      if (emptyStateEl) emptyStateEl.style.display = 'block';
      return;
    }

    if (emptyStateEl) emptyStateEl.style.display = 'none';
    servicesGrid.style.display = 'grid';

    servicesGrid.innerHTML = state.filteredServices.map(service => {
      const badgeHtml = service.badge ? `<span class="card-badge">${service.badge}</span>` : '';
      const whatsappMessage = encodeURIComponent(`${CLINIC_INFO.whatsappMessage}${service.title}`);
      const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${whatsappMessage}`;

      return `
        <article class="service-card reveal-on-scroll visible">
          <div class="card-image-box">
            <img src="${service.image}" alt="${service.title}" loading="lazy" onerror="this.src='assets/images/facial-limpieza.svg'">
            ${badgeHtml}
            <span class="card-category-tag">${service.categoryName}</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">${service.title}</h3>
            <p class="card-description">${service.shortDescription}</p>
            
            <div class="card-meta">
              <div class="card-duration">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>${service.duration}</span>
              </div>
              <div class="card-price">${service.price}</div>
            </div>

            <div class="card-actions">
              <button class="btn-card-detail" data-service-id="${service.id}">
                Ver Detalles
              </button>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn-card-book">
                Reservar
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function updateResultsCount() {
    if (!resultsCountEl) return;
    const count = state.filteredServices.length;
    resultsCountEl.textContent = `${count} ${count === 1 ? 'servicio encontrado' : 'servicios encontrados'}`;
  }

  /* ==========================================================================
     6. GESTION DEL MODAL DE DETALLES
     ========================================================================== */
  function openServiceModal(serviceId) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service || !serviceModal) return;

    modalImage.src = service.image;
    modalImage.alt = service.title;
    modalCategory.textContent = service.categoryName;
    modalTitle.textContent = service.title;
    modalPrice.textContent = service.price;
    modalDuration.textContent = `Duración aproximada: ${service.duration}`;
    modalDescription.textContent = service.fullDescription;

    // Beneficios
    modalBenefits.innerHTML = service.benefits.map(b => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>${b}</span>
      </li>
    `).join('');

    // Recomendaciones
    if (service.recommendations) {
      modalRecommendations.style.display = 'block';
      modalRecommendations.querySelector('p').textContent = service.recommendations;
    } else {
      modalRecommendations.style.display = 'none';
    }

    // WhatsApp CTA button
    const whatsappMessage = encodeURIComponent(`${CLINIC_INFO.whatsappMessage}${service.title}`);
    modalBookWhatsappBtn.href = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${whatsappMessage}`;

    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     7. EVENT LISTENERS
     ========================================================================== */
  function setupEventListeners() {
    // Buscador principal
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = state.searchQuery ? 'flex' : 'none';
        }
        applyFilters();
      });
    }

    // Botón para limpiar búsqueda
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        applyFilters();
      });
    }

    // Tabs de categoría
    if (categoryTabsContainer) {
      categoryTabsContainer.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('.tab-btn');
        if (!tabBtn) return;

        state.currentCategory = tabBtn.dataset.category;
        renderCategoryTabs();
        applyFilters();
      });
    }

    // Abrir Modal al hacer clic en "Ver Detalles"
    if (servicesGrid) {
      servicesGrid.addEventListener('click', (e) => {
        const detailBtn = e.target.closest('.btn-card-detail');
        if (detailBtn) {
          openServiceModal(detailBtn.dataset.serviceId);
        }
      });
    }

    // Cerrar Modal
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
    if (serviceModal) {
      serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeServiceModal();
      });
    }

    // Botón de búsqueda rápida en Header
    if (headerSearchBtn && searchInput) {
      headerSearchBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('servicios');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => searchInput.focus(), 600);
        }
      });
    }

    // Toggle de Menú Móvil
    if (mobileNavToggle && navMenu) {
      mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });

      // Cerrar menú al hacer clic en un enlace
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isActive = item.classList.contains('active');
        
        // Cerrar otros
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // Formulario de Reserva
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('bookingName').value.trim();
        const phone = document.getElementById('bookingPhone').value.trim();
        const service = document.getElementById('bookingServiceSelect').value;
        const date = document.getElementById('bookingDate').value;
        const notes = document.getElementById('bookingNotes').value.trim();

        const textMsg = `Hola ${CLINIC_INFO.name}, me gustaría agendar una cita.\n\n` +
          `*Nombre:* ${name}\n` +
          `*Teléfono:* ${phone}\n` +
          `*Tratamiento:* ${service}\n` +
          `*Fecha deseada:* ${date}\n` +
          `*Notas:* ${notes ? notes : 'Sin observaciones'}`;

        const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(textMsg)}`;
        
        window.open(whatsappUrl, '_blank');
      });
    }
  }

  /* ==========================================================================
     8. ANIMACIONES AL HACER SCROLL
     ========================================================================== */
  function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }

  // Ejecutar inicialización
  init();
});
