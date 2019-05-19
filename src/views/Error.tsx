import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Errors extends Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="author" content="SomitraSR"/>
		<meta name="description" content=""/>
		<meta name="keywords" content=""/>


		<title>SomitraSR - Error 404</title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/> 
		
			
		<link rel="stylesheet" href="css/linearicons.css"/>
			<link rel="stylesheet" href="css/font-awesome.min.css"/>
			<link rel="stylesheet" href="css/bootstrap.css"/>
			<link rel="stylesheet" href="css/owl.carousel.css"/>
			<link rel="stylesheet" href="css/jquery-ui.css"/>				
			<link rel="stylesheet" href="css/nice-select.css"/>							
			<link rel="stylesheet" href="css/animate.min.css"/>
						
			<link rel="stylesheet" href="css/main.css"/>
        </Helmet>

        <header id="header">
		  <Navbar/>
		  </header>
	  
	
			<section className="relative about-banner">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h3 className="text-white">
							Error 404 - Not found
							</h3>	
                           <br/>
                           <br/>
                            <a href="/" className="primary-btn text-uppercase toback"><i className="fas fa-chevron-left"></i> Back to Home</a>
						</div>	
					</div>
				</div>
			</section>

		

            <footer className="footer-area section-gap">
             <Footer/>
            </footer>
      </React.Fragment>
    )
  }
}
export default Errors ;