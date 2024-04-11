import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { HomePage } from "./pages/HomePage";
 import { Footer } from './components/Footer'
 import { Login } from './components/Login';
 import SingleProduct from "./components/SingleProduct";
import MenProducts from "./pages/MenProducts";
import WomenProducts from "./pages/WomenProducts";
import KidsProducts from "./pages/KidsProducts";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import Protected from "./pages/Protected";
function App() {
  return (
     <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/men-products" element={<MenProducts />} />
      <Route path="/women-products" element={<WomenProducts />} />
      <Route path="/kids-products" element={<KidsProducts />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Protected Component={<DashBoard />} />} />
     </Routes>
     <Footer />
    </>
  );
}
export default App;
