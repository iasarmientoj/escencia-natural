/* ==========================================================================
   🌿 ESENCIA NATURAL - LÓGICA DEL CATÁLOGO DE PRODUCTOS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('catalogGrid');
  const filterTabsContainer = document.getElementById('filterTabs');
  const searchInput = document.getElementById('searchInput');
  const resultsCount = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');

  // Estado del catálogo
  let categoriaActiva = 'todos';
  let busquedaActiva = '';

  // Verificar si hay una categoría en la URL (ej. productos.html?cat=tes)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  
  if (catParam) {
    // Validar que la categoría exista en nuestros botones de filtro
    const activeTab = filterTabsContainer.querySelector(`[data-category="${catParam}"]`);
    if (activeTab) {
      // Remover active de los otros tabs
      filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
      // Añadir active al tab correspondiente
      activeTab.classList.add('active');
      categoriaActiva = catParam;
    }
  }

  // Renderizar catálogo inicial
  filtrarYRenderizar();

  // 1. Escuchadores de eventos para los tabs de filtrado
  if (filterTabsContainer) {
    filterTabsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-tab')) {
        // Remover clase activa de todos
        filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
        
        // Añadir clase activa al seleccionado
        e.target.classList.add('active');
        
        // Actualizar estado
        categoriaActiva = e.target.getAttribute('data-category');
        
        // Actualizar URL sin recargar la página (opcional, buena experiencia de usuario)
        const nuevaUrl = new URL(window.location);
        if (categoriaActiva === 'todos') {
          nuevaUrl.searchParams.delete('cat');
        } else {
          nuevaUrl.searchParams.set('cat', categoriaActiva);
        }
        window.history.pushState({}, '', nuevaUrl);

        filtrarYRenderizar();
      }
    });
  }

  // 2. Escuchador de eventos para búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      busquedaActiva = e.target.value.toLowerCase().trim();
      filtrarYRenderizar();
    });
  }

  /**
   * Filtra los productos de PRODUCTOS según la categoría y búsqueda activas, y los dibuja en el grid.
   */
  function filtrarYRenderizar() {
    if (typeof PRODUCTOS === 'undefined' || !catalogGrid) return;

    // Filtrado lógico
    const productosFiltrados = PRODUCTOS.filter(producto => {
      // Filtro por categoría
      const coincideCategoria = categoriaActiva === 'todos' || producto.categoria === categoriaActiva;
      
      // Filtro por término de búsqueda (nombre, categoría label o ingredientes)
      const coincideBusqueda = producto.nombre.toLowerCase().includes(busquedaActiva) || 
                               producto.descripcionCorta.toLowerCase().includes(busquedaActiva) ||
                               producto.categoriaLabel.toLowerCase().includes(busquedaActiva) ||
                               producto.ingredientes.toLowerCase().includes(busquedaActiva);

      return coincideCategoria && coincideBusqueda;
    });

    // Actualizar contador
    const totalMostrados = productosFiltrados.length;
    if (busquedaActiva !== '') {
      resultsCount.innerText = `Encontrados ${totalMostrados} producto(s) para "${searchInput.value}"`;
    } else {
      const catLabel = categoriaActiva === 'todos' ? 'todos los productos' : PRODUCTOS.find(p => p.categoria === categoriaActiva)?.categoriaLabel || categoriaActiva;
      resultsCount.innerText = `Mostrando ${totalMostrados} producto(s) en ${catLabel}`;
    }

    // Limpiar grid
    catalogGrid.innerHTML = '';

    // Manejar estado de sin resultados
    if (totalMostrados === 0) {
      catalogGrid.style.display = 'none';
      noResults.style.display = 'block';
    } else {
      catalogGrid.style.display = 'grid';
      noResults.style.display = 'none';

      // Renderizar las cards
      productosFiltrados.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.opacity = '1'; // Asegurar que sea visible (IntersectionObserver se encargará si es scroll fresco)
        
        card.innerHTML = `
          <span class="product-badge">${prod.categoriaLabel}</span>
          <div class="product-image-container">
            <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
          </div>
          <div class="product-info">
            <h3 class="product-title"><a href="producto.html?id=${prod.id}">${prod.nombre}</a></h3>
            <div class="product-price">$${prod.precio.toLocaleString('es-CO')} COP</div>
            <p class="product-desc">${prod.descripcionCorta}</p>
            <div class="product-card-btns">
              <a href="producto.html?id=${prod.id}" class="btn btn-outline">Detalle</a>
              <a href="${window.generarLinkWhatsApp(prod.nombre, prod.precio, 1)}" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> Pedir</a>
            </div>
          </div>
        `;
        catalogGrid.appendChild(card);
      });
    }
  }
});
