import {Routes, Route} from "react-router-dom";
import {ProductListing} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
