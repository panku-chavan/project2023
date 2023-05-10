import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedinIn, FaGithubSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="" style={{ minHeight: "" }}>
            <footer className="bg-dark text-center text-white">

                <div className="container">

                    <section className="">

                        <Link className="btn btn-outline-light btn-floating m-2 mt-4 mb-4" to={"https://www.facebook.com/pankajsubhashchavan/"} role="button"><FaFacebookSquare /></Link>

                        <Link className="btn btn-outline-light btn-floating m-2 mt-4 mb-4" to={"https://twitter.com/panku_chavan"} role="button"><FaTwitterSquare /></Link>

                        <Link className="btn btn-outline-light btn-floating m-2 mt-4 mb-4" to={"https://www.instagram.com/panku_chavan/"} role="button"><FaInstagramSquare /></Link>

                        <Link className="btn btn-outline-light btn-floating m-2 mt-4 mb-4" to={"https://www.linkedin.com/in/pankaj-chavan-9ba6681ba/"} role="button"><FaLinkedinIn /></Link>

                        <Link className="btn btn-outline-light btn-floating m-2 mt-4 mb-4" to={"https://github.com/panku-chavan/"} role="button"><FaGithubSquare /></Link>
                    </section>


                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright :
                    <span className="text-white" to={""}> panku-chavan</span>
                </div>
                {/* Copyright */}
            </footer>
        </div>

    )
}

export default Footer