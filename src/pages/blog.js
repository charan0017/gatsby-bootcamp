import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import blogStyles from './blog.module.scss';

// Method to Fetch data from CMS
const BlogPage = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    const posts = data.allContentfulBlogPost.edges.map(({ node }, i) => {
        return (
            <li key={i} className={blogStyles.post}>
                <Link to={`${props.location.pathname}/${node.slug}`}>
                    <h2>{node.title}</h2>
                    <p>{node.publishedDate}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout title="Blog">
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>{posts}</ol>
        </Layout>
    )
}

// Method to Fetch data from MD files
/*const BlogPage = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const posts = data.allMarkdownRemark.edges.map(({ node }, i) => {
        return (
            <li key={i} className={blogStyles.post}>
                <Link to={`${props.location.pathname}/${node.fields.slug}`}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.date}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>{posts}</ol>
        </Layout>
    )
}*/

export default BlogPage
