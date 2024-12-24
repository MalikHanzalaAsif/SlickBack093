import './App.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Layout from './Layout';
import ScrollOnTop from './utils/ScrollOnTop';
import AboutUs from './pages/AboutUs';
import Shop from './pages/shop';
import Tshirts from './pages/Tshirts';
import Trousers from './pages/Trousers';
import Hoodies from './pages/Hoodies';
import Accessories from './pages/Accessories';
import Cart from './pages/Cart';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

     const timer = setTimeout(() => setIsLoading(false), 2000);

     return () => clearTimeout(timer); 
  }, []);

   
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <ScrollOnTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Content />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/tshirts" element={<Tshirts />} />
              <Route path="/shop/trousers" element={<Trousers />} />
              <Route path="/shop/hoodies" element={<Hoodies />} />
              <Route path="/shop/accessories" element={<Accessories />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
