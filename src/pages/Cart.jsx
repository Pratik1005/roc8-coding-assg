import {CartProduct, NavMenu} from "../components";
import {useCart} from "../context/cart";

const Cart = () => {
  const {cartState} = useCart();
  const deliveryCharges =
    cartState.totalPrice - cartState.discount > 500 ? 0 : 100;
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">Cart</h2>
        {cartState.cart.length > 0 ? (
          <div className="cart-ctn">
            <div>
              {cartState.cart.map((item) => (
                <CartProduct key={item.id} data={item} />
              ))}
            </div>
            <div>
              <h3>Price Details</h3>
              <div className="price-row">
                <p>Price ({cartState.totalItems} items)</p>
                <p>₹{cartState.totalPrice}</p>
              </div>
              <div className="price-row">
                <p>Discount</p>
                <p>-₹{cartState.discount}</p>
              </div>
              <div className="price-row">
                <p>Delivery Charges</p>
                <p>₹{deliveryCharges}</p>
              </div>
              <div className="price-row fw-bold">
                <p>Total Amount</p>
                <p>
                  {cartState.totalPrice + deliveryCharges - cartState.discount}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h3 className="text-center">Cart is Empty!</h3>
        )}
      </section>
    </>
  );
};

export {Cart};
