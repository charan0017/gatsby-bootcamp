import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

// Method to Fetch data from CMS
export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost (slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    const { contentfulBlogPost } = props.data;
    return (
        <Layout title={contentfulBlogPost.title}>
            <h1>{contentfulBlogPost.title}</h1>
            <p>{contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

// Method to Fetch data from MD files
/*export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    const { markdownRemark } = props.data;
    return (
        <Layout>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <p>{markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </Layout>
    )
}
*/

export default Blog;
