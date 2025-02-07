import './App.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Layout from './Layout';
import ScrollOnTop from './utils/ScrollOnTop';
import AboutUs from './pages/AboutUs';
import Shop from './pages/shop';
import CheckoutForm from './components/CheckoutForm';
import Thank from './components/Thank';
import Cart from './pages/Cart';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import NotFound from './pages/NotFound';
import SingleCategory from './pages/SingleCategory';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // const handleLoad = () => {
    //   setIsLoading(false);
    // };


    // if (document.readyState === "complete") {
    //   handleLoad();
    // } else {
    //   window.addEventListener("load", handleLoad);
    // }

    // return () => {
    //   window.removeEventListener("load", handleLoad);
    // };

  }, []);

  return (
    <>
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
                <Route path="/shop/tshirts" element={<SingleCategory />} />
                <Route path="/shop/trousers" element={<SingleCategory />} />
                <Route path="/shop/hoodies" element={<SingleCategory />} />
                <Route path="/shop/accessories" element={<SingleCategory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/thank-you" element={<Thank />} />
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </PayPalScriptProvider>
    </>
  );
}

export default App;