import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Style.css"

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-md  " >
            <div className="container-fluid ">
                <Link className="navbar-brand" to={"/"} >Project 2023</Link>
                <div className='d-flex flex-row-reverse'>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse  " id="navbarNav">
                        <ul className="navbar-nav  ">
                            <li className="nav-item ">
                                <Link className="nav-link " aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/feature"}>Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/update"}>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>



    )
}

export default NavBar