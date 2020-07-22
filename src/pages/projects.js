import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const Projectpage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
console.log('edges', edges)
  
    const Pages = edges
    .filter(edge => edge.node.frontmatter.path.includes("/projects")) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      {/* <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet> */}
      {/* <HeroHeader/> */}
      <h2>Projects &darr;</h2>
      <div className="grids">
        {Pages}
      </div>
      {/* <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div> */}
    </Layout>
  )
}

export default Projectpage
export const pageQuery = graphql`
  query Projectpage{
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
