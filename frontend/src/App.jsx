import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Orders from "./pages/Orders.jsx";
import Verify from "./pages/Verify.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <main className="overflow-hidden text-[#404040] bg-primary">
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </main>
  )
}