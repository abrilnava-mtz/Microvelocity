document.addEventListener("DOMContentLoaded", () => {
    const lightboxLinks = document.querySelectorAll(".lightbox");
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightboxButton = document.getElementById("close-lightbox");
  
    // Manejo del lightbox
    lightboxLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const imageSrc = link.getAttribute("href");
        lightboxImage.setAttribute("src", imageSrc);
        lightboxOverlay.classList.remove("hidden");
      });
    });
  
    closeLightboxButton.addEventListener("click", () => {
      lightboxOverlay.classList.add("hidden");
    });
  
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) {
        lightboxOverlay.classList.add("hidden");
      }
    });
  });
  
  // Variables globales
  let cart = [];
  
  // Función para actualizar el carrito en la interfaz
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Limpia el contenido del carrito
    let total = 0;
  
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      // Crear fila para cada artículo del carrito
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${itemTotal.toFixed(2)}</td>
      `;
      cartItemsContainer.appendChild(row);
    });
  
    // Actualizar el total del carrito
    cartTotal.textContent = `$${total.toFixed(2)}`;
  }
  