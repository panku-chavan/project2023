import React from 'react'
import Layout from '../../component/Layout'
import HeadingText from './HeadingText'
import ImageSlider from './ImageSlider'
import Tilt from 'react-parallax-tilt'
import img from "../../Assets/bg.jpg"

const Homepage = () => {

    return (
        <Layout>
            <section>
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <div style={{ padding: 50, textAlign: "left" }}>
                            <HeadingText />
                        </div>

                    </div>
                    <div className="col-md-5 ">
                        <div className="m-5">
                            <Tilt>
                                <img src={img} className="img-fluid shadow rounded-3" alt="avatar" />

                            </Tilt>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "8rem" }}></div>
            </section>
            <ImageSlider />
        </Layout>
    )
}

export default Homepage