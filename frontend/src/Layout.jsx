import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
         <div id="app" style={{ height: "100%", display: 'flex', flexDirection: "column" }}>
            <Navbar />
            <main style={{flex: "1"}}>
            <Outlet />
            </main>
            <Footer />
         </div>
    );
};

export default Layout;