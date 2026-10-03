import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Sofa from "./pages/Sofa";
import Chairs from "./pages/Chair";
import Dining from "./pages/Dining";
import Bedroom from "./pages/Bedroom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;