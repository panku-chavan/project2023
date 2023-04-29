import React from 'react'
import Layout from '../../component/Layout'
import HeadingText from './HeadingText'

const Homepage = () => {
    return (
        <Layout>
            <div style={{ padding: 50, textAlign: "left" }}>
                <HeadingText />
            </div>
        </Layout>
    )
}

export default Homepage