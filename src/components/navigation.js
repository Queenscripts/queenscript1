import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/blog">Blog</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)