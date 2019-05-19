import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Contact extends Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="author" content="SomitraSR"/>
		<meta name="description" content=""/>
		<meta name="keywords" content=""/>


		<title>SomitraSR - Contact</title>

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
	  
	
			<section className="relative about-banner">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Contact Us				
							</h1>	
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/contact"> Contact</a></p>
						</div>	
					</div>
				</div>
			</section>

			<section className="services-area section-gap" id="contact" >
				<div className="container">
		            <div className="row d-flex justify-content-center">
		                <div className="menu-content  col-lg-7">
		                    <div className="title text-center">
														<h1 className="mb-10">Direct</h1>
		                        <p>By using social or mailing handlers </p>
		                    </div>
		                </div>
		            </div>						
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-services" id="clicker">
							<a href="https://www.messenger.com/t/SomitraSR">	<div className="icon-con"><i className="fab fa-facebook-messenger"></i></div>
					<h4 id="titled">Messenger</h4></a>
						
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-services" id="clicker">
							<a href="skype:live:somitrasr?chat">	<div className="icon-con">	<i className="fab fa-skype"></i></div>
							<h4 id="titled">Skype</h4></a>
							
							
							</div>
						</div>



						<div className="col-lg-4 col-md-6">
							<div className="single-services" id="clicker">
							<a href="https://www.linkedin.com/in/somitrasr/">	<div className="icon-con">	<i className="fab fa-linkedin-in"></i>	</div>
							<h4 id="titled">Linkedin</h4></a>
							
							</div>
						</div>
						


						<div className="col-lg-4 col-md-6">
							<div className="single-services" id="clicker">
							<a href="https://twitter.com/SomitraSR">	<div className="icon-con">	<i className="fab fa-twitter"></i>	</div>
							<h4 id="titled">Twitter</h4></a>
							
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="single-services" id="clicker">
							<a href="https://www.instagram.com/somitrasr">	<div className="icon-con">	<i className="fab fa-instagram"></i>	</div>
							<h4 id="titled">Instagram</h4></a>
				
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services" id="clicker">
							<a href="mailto:somitra.sinha@yahoo.com?subject=Hi Somitra !!">	<div className="icon-con">	<i className="fas fa-envelope"></i>	</div>
							<h4 id="titled">Mail</h4></a>
							
							</div>
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
export default Contact ;