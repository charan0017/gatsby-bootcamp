import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout title="About">
            <h1>About Me</h1>
            <p>I am a full-stack web developer! I love programming and learning new things everyday!</p>
            <p>Want to hire? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage
