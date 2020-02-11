import React from 'react'

import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                <Head title={props.title} />
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
