import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="" style={{ minHeight: "" }}>
            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container">
                    {/* Section: Social media */}
                    <section className="">
                        {/* Facebook */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"></Link>
                        {/* Twitter */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"></Link>
                        {/* Google */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"></Link>
                        {/* Instagram */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"></Link>
                        {/* Linkedin */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"></Link>
                        {/* Github */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"></Link>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <Link className="text-white">panku-chavan</Link>
                </div>
                {/* Copyright */}
            </footer>
        </div>

    )
}

export default Footer