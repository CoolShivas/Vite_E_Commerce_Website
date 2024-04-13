import Services from "./components/Main/Services";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ErrorPage from "./components/Nabar/ErrorPage";
import SingleProduct from "./components/Nabar/SingleProduct";
import Cart from "./components/Nabar/Cart";
import Products from "./components/Nabar/Products";
import ContactPage from "./components/Nabar/ContactPage";
import AboutPage from "./components/Nabar/AboutPage";
import HomePage from "./components/Nabar/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.module.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={AboutPage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
        <Route path="/products" Component={Products}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="/singleproducts/:id" Component={SingleProduct}></Route>
        <Route path="*" Component={ErrorPage}></Route>
      </Routes>
      <Services></Services>
      <Footer></Footer>
    </Router>
  );
}

export default App;
