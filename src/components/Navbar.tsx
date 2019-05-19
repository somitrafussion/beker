import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

 class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
          
         <div className="container main-menu">
		    	<div className="row align-items-center justify-content-between d-flex">
			      <div id="logo">
						<NavLink to="/"><div className="logo-main"><i className="fas fa-cookie-bite"></i><img src="/img/logo.png" alt="" title="" /></div></NavLink>
			      </div>
			      <nav id="nav-menu-container">
			        <ul className="nav-menu">
			          <li><a href="/">Home</a></li>
			          <li><a href="/about">About</a></li>
			          <li><NavLink to="/projects">Projects</NavLink></li>
			          <li><NavLink to="/designs">Designs</NavLink></li>       					          		          
			          <li><NavLink to="/contact-me">Contact</NavLink></li>
								<li><a href="https://drive.google.com/file/d/1yUkwK98O8jx9NBKePl-f5_j71XjMyXe3/view?usp=sharing">Download Resume</a></li>
			        </ul>
			      </nav>   		
		    	</div>
		    </div>
      </React.Fragment>
    )
  }
}
export default Navbar;
