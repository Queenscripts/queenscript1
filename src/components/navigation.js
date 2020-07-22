import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <Link to="/posts">Blog</Link>
    <Link to="/projects">Projects</Link>
    <ThemeChanger/>
  </nav>
  
)