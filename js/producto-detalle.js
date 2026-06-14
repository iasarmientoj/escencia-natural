/* ==========================================================================
   🌿 ESENCIA NATURAL - DETALLE DE PRODUCTO Y COMPRA POR WHATSAPP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener ID del producto desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const prodId = parseInt(urlParams.get('id'));

  // Elementos del DOM
  const detailContainer = document.getElementById('detailContainer');
  const productError = document.getElementById('productError');
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  
  const detailImg = document.getElementById('detailImg');
  const detailCategory = document.getElementById('detailCategory');
  const detailTitle = document.getElementById('detailTitle');
  const detailPrice = document.getElementById('detailPrice');
  const detailDescShort = document.getElementById('detailDescShort');
  const detailDescLong = document.getElementById('detailDescLong');
  const detailBenefits = document.getElementById('detailBenefits');
  const detailUso = document.getElementById('detailUso');
  const detailIngredientes = document.getElementById('detailIngredientes');
  
  const qtyInput = document.getElementById('qtyInput');
  const minusBtn = document.getElementById('minusBtn');
  const plusBtn = document.getElementById('plusBtn');
  const detailWaBtn = document.getElementById('detailWaBtn');
  const relatedGrid = document.getElementById('relatedGrid');

  // Validar base de datos
  if (typeof PRODUCTOS === 'undefined') {
    mostrarError();
    return;
  }

  // Buscar producto por ID
  const producto = PRODUCTOS.find(p => p.id === prodId);

  if (!producto) {
    mostrarError();
    return;
  }

  // 2. Rellenar Información del Producto
  document.title = `${producto.nombre} | Esencia Natural`;
  breadcrumbCurrent.innerText = producto.nombre;
  
  detailImg.src = producto.imagen;
  detailImg.alt = producto.nombre;
  
  detailCategory.innerText = producto.categoriaLabel;
  detailTitle.innerText = producto.nombre;
  detailPrice.innerText = `$${producto.precio.toLocaleString('es-CO')} COP`;
  detailDescShort.innerText = producto.descripcionCorta;
  detailDescLong.innerText = producto.descripcionLarga;
  detailUso.innerText = producto.modoUso;
  detailIngredientes.innerText = producto.ingredientes;

  // Cargar beneficios
  detailBenefits.innerHTML = '';
  producto.beneficios.forEach(ben => {
    const li = document.createElement('li');
    li.innerText = ben;
    detailBenefits.appendChild(li);
  });

  // 3. Control de Cantidad y Enlace de WhatsApp
  let cantidadActual = 1;

  function actualizarEnlaceWhatsApp() {
    if (typeof window.generarLinkWhatsApp === 'function') {
      const link = window.generarLinkWhatsApp(producto.nombre, producto.precio, cantidadActual);
      detailWaBtn.href = link;
    }
  }

  actualizarEnlaceWhatsApp();

  if (minusBtn && plusBtn && qtyInput) {
    minusBtn.addEventListener('click', () => {
      if (cantidadActual > 1) {
        cantidadActual--;
        qtyInput.value = cantidadActual;
        actualizarEnlaceWhatsApp();
      }
    });

    plusBtn.addEventListener('click', () => {
      if (cantidadActual < 99) {
        cantidadActual++;
        qtyInput.value = cantidadActual;
        actualizarEnlaceWhatsApp();
      }
    });
  }

  // 4. Lógica de Pestañas (Tabs)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover activas de botones y contenidos
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Activar botón seleccionado
      btn.classList.add('active');

      // Activar contenido correspondiente
      const tabId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 5. Cargar Productos Relacionados
  cargarRelacionados(producto);

  // Funciones Auxiliares
  function mostrarError() {
    if (detailContainer) detailContainer.style.display = 'none';
    if (productError) productError.style.display = 'block';
    if (breadcrumbCurrent) breadcrumbCurrent.innerText = 'Error';
    const relatedSection = document.querySelector('.related-products');
    if (relatedSection) relatedSection.style.display = 'none';
  }

  function cargarRelacionados(prodActual) {
    if (!relatedGrid) return;

    // Buscar productos de la misma categoría excluyendo al actual
    let filtrados = PRODUCTOS.filter(p => p.categoria === prodActual.categoria && p.id !== prodActual.id);
    
    // Si no hay suficientes, rellenar con otros al azar
    if (filtrados.length < 4) {
      const otros = PRODUCTOS.filter(p => p.categoria !== prodActual.categoria && p.id !== prodActual.id);
      filtrados = [...filtrados, ...otros];
    }

    // Limitar a los 4 primeros
    const relacionados = filtrados.slice(0, 4);

    relatedGrid.innerHTML = '';
    relacionados.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.opacity = '1';
      
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
      relatedGrid.appendChild(card);
    });
  }
});
