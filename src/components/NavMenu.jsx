import {Link} from "react-router-dom";
import {useCart} from "../context/cart";

const NavMenu = () => {
  const {cartState} = useCart();
  return (
    <section className="nav-ctn">
      <nav className="nav-menu">
        <h1 className="logo">Flipkart</h1>
        <div>
          <ul className="right-nav">
            <Link to="/">Shop</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">
              Cart {cartState.cart.length > 0 && `(${cartState.cart.length})`}
            </Link>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export {NavMenu};
