import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Filter from '../components/filter';

class Portfolio  extends Component {



  render() {
    return (
      <React.Fragment>
        <Helmet>

		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="author" content="SomitraSR"/>
		<meta name="description" content=""/>
		<meta name="keywords" content=""/>

		<title>SomitraSR - Designs</title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/> 

		
		<link rel="stylesheet" href="css/linearicons.css"/>
			<link rel="stylesheet" href="css/font-awesome.min.css"/>
			<link rel="stylesheet" href="css/bootstrap.css"/>

			<link rel="stylesheet" href="css/jquery-ui.css"/>				
			<link rel="stylesheet" href="css/nice-select.css"/>							
			<link rel="stylesheet" href="css/animate.min.css"/>
			<link rel="stylesheet" href="css/owl.carousel.css"/>			
			<link rel="stylesheet" href="css/main.css"/>
        </Helmet>

        <header id="header">
		    <Navbar/>
		  </header>

			<section className="about-banner">
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
			 Designs		
							</h1>	
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/designs"> Designs</a></p>
						</div>	
					</div>
				</div>
			</section>
	

            <section className="portfolio-area section-gap" id="designs">
                <div className="container">
		            <div className="row d-flex justify-content-center">
		                <div className="menu-content pb-70 col-lg-8">
		                    <div className="title text-center">
		                        <h1 className="mb-10">Our Latest Featured Designs</h1>
		                        <p>Which is based on modern concepts </p>
		                    </div>
		                </div>
		            </div>
                <Filter/>
          
                    
                </div>
            </section>
           
           
            <footer className="footer-area section-gap">
                <Footer/>
            </footer>




      </React.Fragment>
    )
  }
}
export default Portfolio