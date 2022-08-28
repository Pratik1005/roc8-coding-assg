import {Routes, Route} from "react-router-dom";
import {ProductListing, Cart, Wishlist} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<ProductListing />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
