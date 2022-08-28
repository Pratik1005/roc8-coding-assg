import {NavMenu, ProductCard} from "../components";
import {useCart} from "../context/cart";

const Wishlist = () => {
  const {cartState} = useCart();
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">Wishlist</h2>
        {cartState.wishlist.length > 0 ? (
          <div className="wishlist-ctn">
            {cartState.wishlist.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <h3 className="text-center">No products in wishlist</h3>
        )}
      </section>
    </>
  );
};

export {Wishlist};
