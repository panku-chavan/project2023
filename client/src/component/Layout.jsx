import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import bg from "../Assets/bg.jpg"

const Layout = ({ children }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, color: "white" }}>
            <NavBar />
            <main style={{ minHeight: "80vh" }}>
                {children}

            </main>
            <Footer />

        </div>
    )
}

export default Layout