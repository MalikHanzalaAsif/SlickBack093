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
import CheckoutForm from './components/CheckoutForm';
import Thank from './components/Thank';
import Cart from './pages/Cart';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const handleLoad = () => {
      setIsLoading(false);
    };


    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };

  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PayPalScriptProvider
          options={{
            "client-id": import.meta.env.VITE_PAYPAL_SANDBOX_CLIENT_ID,
            currency: "USD",
          }}
        >
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
                <Route path="/thank-you" element={<Thank />} />
                <Route path="/checkout" element={<CheckoutForm />} />
              </Route>
            </Routes>
          </Router>
        </PayPalScriptProvider>
      )}
    </>
  );
}

export default App;