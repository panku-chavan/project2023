import React from 'react'
import Tilt from "react-parallax-tilt";
import img from "../../Assets/img.jpeg";
import img1 from "../../Assets/s2.jpeg";


const ImageSlider = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-5">
                    <Tilt>
                        <img src={img} className="img-fluid shadow rounded-3" alt="avatar" />
                    </Tilt>
                </div>
                <div className="col-md-4 mb-5">
                    <Tilt>
                        <img src={img} className="img-fluid shadow rounded-3" alt="avatar" />
                    </Tilt>
                </div>
                <div className="col-md-4 mb-5">
                    <Tilt>
                        <img src={img} className="img-fluid shadow rounded-3" alt="avatar" />
                    </Tilt>
                </div>
                <div className="col-md-4 mb-5">
                    <Tilt>
                        <img src={img1} className="img-fluid shadow rounded-3" alt="avatar" />
                    </Tilt>
                </div>
                <div className="col-md-4 mb-5">
                    <Tilt>
                        <img src={img1} className="img-fluid shadow rounded-3" alt="avatar" />
                    </Tilt>
                </div>
                <div className="col-md-4 mb-5">
                    <Tilt>
                        <img src={img1} className="img-fluid shadow rounded-3" alt="avatar" />
                    </Tilt>
                </div>

            </div>
        </div>

    )
}

export default ImageSlider