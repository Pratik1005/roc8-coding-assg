const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.oldPrice,
        discount:
          state.discount + (action.payload.oldPrice - action.payload.newPrice),
      };
    case "INCREMENT_PRODUCT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {...item, count: item.count + 1}
            : item
        ),
        totalPrice: state.totalPrice + action.payload.oldPrice,
        discount:
          state.discount + (action.payload.oldPrice - action.payload.newPrice),
      };
    case "DECREMENT_PRODUCT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {...item, count: item.count - 1}
            : item
        ),
        totalPrice: state.totalPrice - action.payload.oldPrice,
        discount:
          state.discount - (action.payload.oldPrice - action.payload.newPrice),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalPrice:
          state.totalPrice - action.payload.oldPrice * action.payload.count,
        discount:
          state.discount -
          (action.payload.oldPrice - action.payload.newPrice) *
            action.payload.count,
      };
    case "SAVE_TO_WISHLIST":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalPrice:
          state.totalPrice - action.payload.oldPrice * action.payload.count,
        discount:
          state.discount -
          (action.payload.oldPrice - action.payload.newPrice) *
            action.payload.count,
        wishlist: [...state.wishlist, action.payload],
      };
    default:
      return state;
  }
};

export {cartReducer};
