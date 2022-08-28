const productReducer = (state, action) => {
  switch (action.type) {
    case "SIZE_SMALL":
      return {...state, size: {...state.size, small: !state.size.small}};
    case "SIZE_MEDIUM":
      return {...state, size: {...state.size, medium: !state.size.medium}};
    case "SIZE_LARGE":
      return {...state, size: {...state.size, large: !state.size.large}};
    case "BRAND_ADIDAS":
      return {...state, brand: {...state.brand, adidas: !state.brand.adidas}};
    case "BRAND_ALLEN_SOLLY":
      return {
        ...state,
        brand: {...state.brand, allenSolly: !state.brand.allenSolly},
      };
    case "BRAND_ARROW":
      return {...state, brand: {...state.brand, arrow: !state.brand.arrow}};
    case "FILTER_BY_MEN":
      return {...state, gender: {...state.gender, men: !state.gender.men}};
    case "FILTER_BY_WOMEN":
      return {...state, gender: {...state.gender, women: !state.gender.women}};
    case "SORT_BY":
      return {...state, sortBy: action.payload};
    case "CLEAR_FILTER":
      return {
        gender: {men: false, women: false},
        brand: {adidas: false, allenSolly: false, arrow: false},
        size: {small: false, medium: false, large: false},
        sortBy: "",
      };
    default:
      return state;
  }
};

export {productReducer};
