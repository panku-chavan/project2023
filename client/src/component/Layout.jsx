import React from 'react';
import NavBar from './NavBar';

import bg from "../Assets/bg.jpg"
import Footer from './Footer';

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