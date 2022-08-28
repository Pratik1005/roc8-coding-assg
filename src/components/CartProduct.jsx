import {useCart} from "../context/cart";
import {isProductInList} from "../util";

const CartProduct = ({data}) => {
  const {id, imgSrc, title, newPrice, oldPrice, count} = data;
  const {cartState, cartDispatch} = useCart();

  const handleProductIncrement = () => {
    cartDispatch({type: "INCREMENT_PRODUCT", payload: data});
  };

  const handleProductDecrement = () => {
    cartDispatch({type: "DECREMENT_PRODUCT", payload: data});
  };

  const handleRemoveProduct = () => {
    cartDispatch({type: "REMOVE_PRODUCT", payload: data});
  };

  const handleWishlist = () => {
    cartDispatch({type: "SAVE_TO_WISHLIST", payload: data});
  };
  return (
    <div className="cart-product-ctn">
      <img className="cart-img" src={imgSrc} alt={title} />
      <div>
        <h3>{title}</h3>
        <div className="card-pricing">
          <p className="card-price fw-bold">₹{newPrice}</p>
          <p className="card-price-cut">₹{oldPrice}</p>
        </div>
        <div className="pd-bottom-lg">
          <button
            className="btn"
            disabled={count === 1}
            onClick={() => handleProductDecrement()}
          >
            -
          </button>
          <span className="pd-sm">{count}</span>
          <button className="btn" onClick={() => handleProductIncrement()}>
            +
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => handleRemoveProduct()}>
            Remove Product
          </button>
          <button
            className="btn btn-primary-outline"
            disabled={isProductInList(id, cartState.wishlist)}
            onClick={() => handleWishlist()}
          >
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export {CartProduct};
