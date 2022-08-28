const sortProduct = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort(
      (item1, item2) => item1.newPrice - item2.newPrice
    );
  }
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort(
      (item1, item2) => item2.newPrice - item1.newPrice
    );
  }
  return products;
};

const filterProduct = (products, categoryState, filterName) => {
  let filteredProduct = [];
  let count = 0;
  for (let categoryName in categoryState) {
    if (categoryState[categoryName]) {
      filteredProduct.push(
        products.filter((item) => item[filterName] === categoryName)
      );
    } else {
      count++;
    }
  }
  return count === Object.keys(categoryState).length
    ? products
    : filteredProduct;
};

const filterProductByBrand = (products, brandState) => {
  let filteredProduct = [];
  let count = 0;
  for (let brand in brandState) {
    if (brandState[brand]) {
      filteredProduct = filteredProduct.concat(
        products.filter((item) => item.brand === brand)
      );
    } else {
      count++;
    }
  }
  return count === Object.keys(brandState).length ? products : filteredProduct;
};

const filterProductBySize = (products, sizeState) => {
  let filteredProduct = [];
  let count = 0;
  for (let size in sizeState) {
    if (sizeState[size]) {
      filteredProduct = filteredProduct.concat(
        products.filter((item) => item.size === size)
      );
    } else {
      count++;
    }
  }
  return count === Object.keys(sizeState).length ? products : filteredProduct;
};

const filterProductByGender = (products, genderState) => {
  let filteredProduct = [];
  let count = 0;
  for (let gender in genderState) {
    if (genderState[gender]) {
      filteredProduct = filteredProduct.concat(
        products.filter((item) => item.category === gender)
      );
    } else {
      count++;
    }
  }
  return count === Object.keys(genderState).length ? products : filteredProduct;
};

const isProductInList = (id, list) => {
  return list.some((item) => item.id === id);
};

export {
  sortProduct,
  filterProduct,
  filterProductByBrand,
  filterProductBySize,
  filterProductByGender,
  isProductInList,
};
