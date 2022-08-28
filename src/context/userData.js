import {createContext, useContext, useReducer} from "react";
import {productReducer} from "../reducer/productReducer";

const ProductContext = createContext();

const initialValue = {
  gender: {men: false, women: false},
  brand: {adidas: false, allenSolly: false, arrow: false},
  size: {small: false, medium: false, large: false},
  sortBy: "",
};

const ProductProvider = ({children}) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialValue
  );
  return (
    <ProductContext.Provider value={{productState, productDispatch}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export {ProductProvider, useProduct};
