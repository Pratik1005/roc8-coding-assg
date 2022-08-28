import "../App.css";
import {NavMenu, ProductFilter, ProductCard} from "../components";
import {product} from "../backend/product";
import {
  sortProduct,
  filterProductByBrand,
  filterProductBySize,
  filterProductByGender,
} from "../util";
import {useProduct} from "../context/userData";

const ProductListing = () => {
  const {productState} = useProduct();

  const productBySize = filterProductBySize(product, productState.size);
  const productByBrand = filterProductByBrand(
    productBySize,
    productState.brand
  );
  const productByGender = filterProductByGender(
    productByBrand,
    productState.gender
  );
  const finalProduct = sortProduct(productByGender, productState.sortBy);

  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <ProductFilter />
        <div className="products-ctn">
          {finalProduct.length > 0 ? (
            finalProduct.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))
          ) : (
            <p>No products found!</p>
          )}
        </div>
      </section>
    </>
  );
};

export {ProductListing};
