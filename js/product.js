document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const clearCartButton = document.querySelector('.clear-cart');
  const buyButton = document.querySelector('.buy');
  const cartContainer = document.querySelector('.product-cart-items');
  const totalPriceSpan = document.querySelector('.total-price');

  const cartItems = [];

  function updateCartDisplay() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    for (const item of cartItems) {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
        <img src="./images/${item.id}.png" alt="${item.name}" />
        <p>${item.name}</p>
        <p>$${item.price}</p>
      `;
      cartContainer.appendChild(cartItemDiv);
      totalPrice += item.price;
    }

    totalPriceSpan.textContent = `$${totalPrice}`;
  }

  function addToCart(product) {
    const productInfo = {
      id: product.getAttribute('data-product'),
      name: product.parentNode.querySelector('.product-name').textContent,
      price: parseFloat(product.parentNode.querySelector('.product-price').textContent.slice(1)),
    };

    cartItems.push(productInfo);
    updateCartDisplay();
  }

  function clearCart() {
    cartItems.length = 0;
    updateCartDisplay();
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      addToCart(button);
    });
  });

  clearCartButton.addEventListener('click', clearCart);

  buyButton.addEventListener('click', async () => {
    if (cartItems.length > 0) {
      
      const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

      
      try {
      
        await simulatePaymentProcessing(totalAmount);

        
        alert('Payment successful! Thank you for your purchase.');
        clearCart();
      } catch (error) {
        
        alert('Payment failed. Please try again later.');
      }
    } else {
      alert('Your cart is empty. Please add items before buying.');
    }
  });

  async function simulatePaymentProcessing(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve(); 
        } else {
          reject(); 
        }
      }, 1500); 
    });
  }
});
