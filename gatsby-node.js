const path = require('path')

// Method to render CMS data dynamically
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug,
            }
        })
    })
}

// Method to create slugs for MD files dynamically and render them
/*
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.fields.slug}`,
            context: {
                slug: node.fields.slug,
            }
        })
    })
}
*/
