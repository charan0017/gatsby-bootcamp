import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import '../styles/index.scss'

const IndexPage = () => {
    return (
        <Layout title="Home">
            <h1>Home</h1>
            <h2>Hi, I am Sai Charan a full-stack web developer!</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
