import {useCart} from "../context/cart";
import {Link, useLocation} from "react-router-dom";
import {isProductInList} from "../util";

const ProductCard = ({data}) => {
  const {id, imgSrc, title, oldPrice, newPrice, discount, size} = data;
  const {cartState, cartDispatch} = useCart();
  const location = useLocation();

  const handleAddToCart = () => {
    cartDispatch({type: "ADD_ITEM_TO_CART", payload: data});
  };
  return (
    <div className="card-vertical-ctn mg-sm">
      <img className="card-img" src={imgSrc} alt={title} />
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <p className="card-subtitle">Size: {size}</p>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{newPrice}</p>
        <p className="card-price-cut">₹{oldPrice}</p>
        <p className="card-price-discount">save ({discount}%)</p>
      </div>
      {isProductInList(id, cartState.cart) ? (
        <Link className="btn btn-icon-text-outline" to="/cart">
          <span className="material-icons">shopping_cart</span>
          Go to cart
        </Link>
      ) : (
        location.pathname !== "/wishlist" && (
          <button
            className="btn btn-icon-text"
            onClick={() => handleAddToCart()}
          >
            <span className="material-icons">shopping_cart</span>
            Add to cart
          </button>
        )
      )}
    </div>
  );
};

export {ProductCard};
