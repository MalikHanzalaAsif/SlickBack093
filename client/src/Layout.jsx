import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from 'react-router-dom';
import { CartProvider } from './components/CartContext.jsx';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <CartProvider>
            <div id="app" style={{ height: "100%", display: 'flex', flexDirection: "column" }}>
                <ToastContainer />
                <Navbar />
                <main id='content' style={{ flex: "1" }}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
};

export default Layout;