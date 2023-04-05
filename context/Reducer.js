export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const AddProductToCart = (product, state) => {
  const updatedCart = [...state.cart];

  //  si es que NO EXISTE en el carrito, ni siquiera el mismo TALLE, se agrega al carrito el producto
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  // se agrega el producto al carro
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    // sino se suma la cantidad del mismo producto
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { cart: updatedCart, total: state.total++ };
};

const RemoveProductFromCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { cart: updatedCart, total: state.total-- };
};

export const shopReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case ADD_PRODUCT:
      return AddProductToCart(action.product, state);

    case REMOVE_PRODUCT:
      return RemoveProductFromCart(action.productId, state);

    default:
      return state;
  }
};
