import {createContext, useReducer, useContext} from "react";
import {cartReducer} from "../reducer/cartReducer";

const CartContext = createContext();

const initialValue = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  discount: 0,
  wishlist: [],
};

const CartProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialValue);
  return (
    <CartContext.Provider value={{cartState, cartDispatch}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};
