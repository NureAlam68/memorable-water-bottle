const getStoredCart = () => {
  const storedCardString = localStorage.getItem("cart");  // get item
  if (storedCardString) {
    return JSON.parse(storedCardString); // if has item then string to object
  }
  return [];
};

// cart save on localStorage
const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart); // object to string
  localStorage.setItem("cart", cartStringified);  // set item
};

// cart add 
const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);  // javascript tai array te push 
  saveCartToLS(cart); // save to localStorage function call
};

export { addToLS, getStoredCart };