import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeConfig from '../config/home';
import Blog from '../components/Blog';
import { NavLink } from 'react-router-dom';

 class Home extends Component {
  render() {
	  var home = homeConfig;
    return (


      <React.Fragment>

        <Helmet> 
      
		<meta name={home.meta.name[0]} content={home.meta.viewport}/>
		<meta name={home.meta.name[1]} content={home.meta.author}/>
		<meta name={home.meta.name[2]} content={home.meta.description}/>
		<meta name={home.meta.name[3]} content={home.meta.keywords.toString()}/>


		<title>{home.home.smallTitle}</title>

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


			<section className="banner-area">
				<div className="container">
					<div className="row fullscreen align-items-center justify-content-between">
						<div className="col-lg-6 col-md-6 banner-left">
							<h6>This is me</h6>
							<h1>{home.home.webTitle}</h1>
							<p>
								{home.home.smallDescription}
							</p>
							<a href="#discover" className="primary-btn text-uppercase">{home.home.buttonText}</a>
						</div>
						<div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
							<img className="img-fluid home" src="/img/front.png"  alt="me"/>
						</div>
					</div>
				</div>					
			</section>
			

			<section className="home-about-area pt-120">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 col-md-6 home-about-left">
							<img className="img-fluid about" src="/img/about-somitrasr.png" alt=""/>
						</div>
						<div className="col-lg-5 col-md-6 home-about-right">
							<h6>About Me</h6>
							<h1 className="text-uppercase">Personal Details</h1>
							<p>
								{home.about.description}
							</p>
							<a href="/about" className="primary-btn text-uppercase">View Full Details</a>
						</div>
					</div>
				</div>	
			</section>


			<section className="services-area section-gap" id="discover">
				<div className="container">
		            <div className="row d-flex justify-content-center">
		                <div className="menu-content  col-lg-7">
		                    <div className="title text-center">
		                        <h1 className="mb-10">Exprienced In </h1>
		                        <p>At about this time</p>
		                    </div>
		                </div>
		            </div>						
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-services">
								<span className="lnr lnr-pie-chart"></span>
							<NavLink to="/projects"><h4>Web Design</h4></NavLink>
								<p>
								Web design include web graphic design, interface design  user experience design and search engine optimization, etc.  
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-services">
								<span className="lnr lnr-laptop-phone"></span>
								<a href="/projects"><h4>Web Development</h4></a>
								<p>
								Web development is the programming that enables website functionality by coding and writing markup for building websites.</p>
							</div>
						</div>



						<div className="col-lg-4 col-md-6">
							<div className="single-services">
								<span className="lnr lnr-tablet"></span>
								<a href="/designs"><h4>UX/UI Design</h4></a>
								<p>
								A UX/UI Design makes technology easy and intuitive for people to use & work on the areas where users directly interact with the product.
								</p>
							</div>
						</div>


						<div className="col-lg-4 col-md-6">
							<div className="single-services">
								<span className="lnr lnr-rocket"></span>
								<a href="/contact-me"><h4>Digital Markiting</h4></a>
								<p>
								Digital marketing encompasses all marketing efforts that use an electronic device or the internet and increase your customers.
								</p>
							</div>				
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services">
							<span className="lnr lnr-chart-bars"></span>
								<a href="/contact-me"><h4> Google Analytics</h4></a>
								<p>
								Google Analytics is a analytics tool which helps you  to analyze your website traffic & track your digital marketing effectiveness.


								</p>
							</div>				
						</div>

					

						<div className="col-lg-4 col-md-6">
							<div className="single-services">
							<span className="lnr lnr-earth"></span>
								<a href="/projects"><h4>ML / AI</h4></a>
								<p>
								ML / AI is one of the most exciting technologies that gives computers the capability to learn without being explicitly programmed. 
								</p>
							</div>				
						</div>

					
																		
					</div>
				</div>	
			</section>


			<section className="facts-area section-gap" id="facts-area">
				<div className="container">				
					<div className="row">
						<div className="col-lg-3 col-md-6 single-fact">
							<h1 className="counter">2536</h1>
							<p>Projects Completed</p>
						</div>
						<div className="col-lg-3 col-md-6 single-fact">
							<h1 className="counter">6784</h1>
							<p>Happy Clients</p>
						</div>
						<div className="col-lg-3 col-md-6 single-fact">
							<h1 className="counter">2239</h1>
							<p>Cups of Coffee</p>
						</div>	
						<div className="col-lg-3 col-md-6 single-fact">
							<h1 className="counter">435</h1>
							<p>Real Professionals</p>
						</div>												
					</div>
				</div>	
			</section>


           

		   
	
			<section className="recent-blog-area section-gap">
			<Blog/>
			</section>

            <footer className="footer-area section-gap">
               <Footer/>
            </footer>
      </React.Fragment>
    )
  }
}
export default Home;