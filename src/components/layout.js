import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import 'prismjs/themes/prism-okaidia.css';
import Img from 'gatsby-image';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
   
      query {
        allImageSharp {
          edges {
            node {
              id
              fluid(maxWidth: 5000, quality: 100, maxHeight: 4000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

 
  const img = 
    data.allImageSharp.edges
  
  return (
    <>

    <div className="site-wrapper">
      <header className="site-header">
     
        <div className="site-title">

          <Link to="/">
          <Img 
                className="hero"
                fluid={img[0].node.fluid}
          />
          {data.site.siteMetadata.title}</Link>
        
        </div>
        
        <Navigation />
      </header>
      
      {children}

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Queenscript &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://queensform.com">Queensform</a></p>
        <aside>   <a class="twitter-timeline" href="https://twitter.com/_queenscript?ref_src=twsrc%5Etfw">Tweets by _queenscript</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</aside>
      </footer>
    </div>
    </>
  )
}


