import TopHeader from "./compontent/header/TopHeader";
import Btnheader from "./compontent/header/Btnheader";
import Home from "./pages/Home"
import ProdcutDetils from "./pages/ProductDetils/ProductDetils"
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./compontent/ScrollTop";
import { AnimatePresence } from "framer-motion";
import CategoryPages from "./pages/CategoryPages";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import Payment from "./pages/Payment";
import Favorite from "./pages/Favorite";
function App() {

  return (
    <>
      <header>
        <TopHeader />
        <Btnheader />
      </header>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: "#e9e9e9",
          borderRadius: "8px",
          padding: "14px",
        }
      }} />
      <ScrollTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ProdcutDetils />} ></Route>
          <Route path="/category/:category" element={<CategoryPages />} ></Route>
          <Route path="/search/" element={<SearchResults />} ></Route>
          <Route path="/Login" element={<Login/>} ></Route>
          <Route path="/Payment" element={<Payment/>} ></Route>
          <Route path="/Fav" element={<Favorite/>}></Route>

        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
