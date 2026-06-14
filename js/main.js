/* ==========================================================================
   🌿 ESENCIA NATURAL - LÓGICA PRINCIPAL (GLOBAL)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil Hamburguesa
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en cualquier link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Efecto Sticky Header con Sombra al hacer Scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scroll-shadow');
      } else {
        header.classList.remove('scroll-shadow');
      }
    });
  }

  // 3. Animaciones sutiles al hacer Scroll (Intersection Observer)
  const animElements = document.querySelectorAll('.benefit-card, .product-card, .category-card, .about-hero, .mission-box, .contact-info-panel, .contact-form-panel');
  
  if ('IntersectionObserver' in window && animElements.length > 0) {
    const animObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animElements.forEach(el => {
      el.style.opacity = '0';
      animObserver.observe(el);
    });
  } else {
    // Si no está soportado, mostrar elementos
    animElements.forEach(el => el.style.opacity = '1');
  }
});

/**
 * Genera el enlace de WhatsApp con el mensaje personalizado del pedido.
 * @param {string} nombreProducto 
 * @param {number} precio 
 * @param {number} cantidad 
 * @returns {string} Enlace a WhatsApp Web o App
 */
function generarLinkWhatsApp(nombreProducto, precio, cantidad = 1) {
  const telefono = "573132926005"; // Formato internacional para Colombia (+57 + 3132926005)
  const total = (precio * cantidad);
  const mensaje = `\u00A1Hola! \u{1F33F} Me interesa el siguiente producto de Esencia Natural:\n\n\u{1F4E6} *${nombreProducto}*\n\u{1F4B0} *Precio unitario:* $${precio.toLocaleString('es-CO')} COP\n\u{1F522} *Cantidad:* ${cantidad}\n\u{1F4B5} *Total estimado:* $${total.toLocaleString('es-CO')} COP\n\n\u00BFTienen disponibilidad? Me gustar\u00EDa coordinar el env\u00EDo. \u00A1Muchas gracias!`;
  
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}

// Exportar helper si es necesario (para otros scripts en contexto global)
window.generarLinkWhatsApp = generarLinkWhatsApp;
