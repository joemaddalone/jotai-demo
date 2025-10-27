import { Routes, Route } from "react-router";
import Header from "./Header";
import Catalog from "./Catalog";
import Cart from "./Cart";

function App() {
  return (
    <>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
