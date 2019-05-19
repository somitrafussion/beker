import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Devl from '../components/Devl';

 class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
 
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="author" content="SomitraSR"/>
		<meta name="description" content=""/>
		<meta name="keywords" content=""/>
		<title>SomitraSR - About </title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/> 


		
		<link rel="stylesheet" href="css/linearicons.css"/>
			<link rel="stylesheet" href="css/font-awesome.min.css"/>
			<link rel="stylesheet" href="css/bootstrap.css"/>

			<link rel="stylesheet" href="css/jquery-ui.css"/>				
			<link rel="stylesheet" href="css/nice-select.css"/>							
			<link rel="stylesheet" href="css/animate.min.css"/>
			<link rel="stylesheet" href="css/main.css"/>
			<link rel="stylesheet" href="css/owl.carousel.css"/>
        </Helmet>
        <header id="header">
		    <Navbar/>
		  </header>

			<section className="about-banner">
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								About Me			
							</h1>	
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/about"> About</a></p>
						</div>	
					</div>
				</div>
			</section>
		

			<section className="home-about-area section-gap">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 col-md-6 home-about-left">
							<img className="img-fluid" src="/img/about-somitrasr.png" alt=""/>
						</div>
						<div className="col-lg-5 col-md-6 home-about-right">
							<h6>About Me</h6>
							<h1 className="text-uppercase">Personal Details</h1>
							<p>
							Legal name :  <b>Sinha Saumitra Rajesh</b>
							<br/>
							Preferred name : <b>Somitra Sinha or SomitraSR</b>
							</p>
						<p className="about-1">
							Software Development and Designing is my passion as well as hobby since childhood. And I have 4 year self experience and 3 year work experience.
							</p>
						

							
							<a href="https://drive.google.com/file/d/1yUkwK98O8jx9NBKePl-f5_j71XjMyXe3/view?usp=sharing" className="primary-btn text-uppercase">Download Resume  <i className="fas fa-arrow-down"></i></a>
						</div>
						<div className="col-lg-12 pt-60">
						<h3 id="story"> My Story </h3>
							<p className="story">
							I discovered my insatiable curiosity for design when I began doodling comics on any whitespace that I could find in my notebook. A dopamine-fuelled sense of satisfaction using my creativity to solve problems propelled me into learning more about the diverse craft. Inevitably, this led me onto a path of self-discovery. 
							</p>
							<p className="story">
							By this I will be easier solve any kind of problem by creating Designs that time I think to take my breath and extremely jumped into Development so that my designs and my creativity go into next level and I first started programming in JavaScript language which is my favorite one, then I go into Python and so on which I already mentioned in Skills section . That's all !!!							
							</p>
							<h4 className="pt-30 major">Major Skills</h4>	
							<br/>
							<br/>
							<h3 className="pt-27">In Designing</h3>	
						</div>
					</div>
					<div className="row skillbar-wraps">					
						<div className="col-lg-6 skill-left">
							<div className="single-skill">
								<p>
								Prototyping 85%
								</p>
								<div className="skill" data-width="85"></div>
							</div>
							<div className="single-skill">
								<p>
									Photoshop 90%
								</p>
								<div className="skill" data-width="90"></div>
							</div>
							<div className="single-skill">
								<p>
									Illustrator 70%
								</p>
								<div className="skill" data-width="70"></div>
							</div>																				
						</div>
						<div className="col-lg-6 skill-right">
							<div className="single-skill">
								<p>
								AdobeXD 80%
								</p>
								<div className="skill" data-width="80"></div>
							</div>								
							<div className="single-skill">
								<p>
								Gimp 95%
								</p>
								<div className="skill" data-width="95"></div>
							</div>
							
							<div className="single-skill">
								<p>
								Mockups Design 90%
								</p>
								<div className="skill" data-width="90"></div>
							</div>


						</div>
					</div>
				</div>	

				<div className="container">
					<div className="row align-items-center justify-content-between">
						
						<div className="col-lg-12 pt-60">
						<br/>
						<br/>
							<h3 className="pt-30">In Development</h3>	
							
						
						</div>
					</div>
					<div className="row skillbar-wraps">		
					<div className="col-lg-12 pt-30 chips">	
			
				

 <Devl/>

				</div>		


						
					</div>
				</div>	
			
		
			</section>
		

		

			<section className="timeline pb-120">
            <div className="text-center">
                <div className="menu-content pb-70">
                    <div className="title text-center">
                        <h1 className="mb-10">My Certifications</h1>
                       <p>Learn to enjoy every minute of your life. </p>
                    </div>
                </div>
            </div>				
			  <ul>
				<li>
			      <div className="content">
						<img className="/img-fluid mx-auto d-block mb-30" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
			        <h4>
			          <time>Mobile Sites </time>
								<time>Certification </time>
			        </h4>
							<p><b>Session :</b> 2017-18</p>
			        <p><b>Result  : </b>95%</p>
						
			      </div>
			    </li>
			    <li>
			      <div className="content">
						<img className="/img-fluid mx-auto d-block mb-30" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
			        <h4>
			          <time> Analytics</time>
								<br/>
								<time>Certification</time>
			        </h4>
							<p><b>Session :</b> 2017-18</p>
			        <p><b>Result  : </b>94%</p>
			      </div>
			    </li>
			 
			    <li>
			      <div className="content">
						<img className="/img-fluid mx-auto d-block mb-30" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
			        <h4>
			          <time>Digital Marketing</time>
								<br/>
								<time>Certification</time>
			        </h4>
							<p><b>Session :</b> 2017-18</p>
			        <p><b>Result  : </b>98.9%</p>
			      </div>
			    </li>
			   
			
			   








						<li>
			      <div className="content">
						<img className="/img-fluid mx-auto d-block mb-30" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
			        <h4>
			          <time> Creative </time>
								<br/>
								<time>Certification</time>
			        </h4>
							<p><b>Session :</b> 2018-19</p>
			        <p><b>Result  : </b>93%</p>
			      </div>
			    </li>
				
					<li>
			      <div className="content">
						<img className="/img-fluid mx-auto d-block mb-30" src="https://creatoracademy.youtube.com/frontend/image/yt_icon_rgb_64.png" alt=""/>
			        <h4>
			          <time> Channel Growth </time>
								<br/>
								<time>Certification</time>
			        </h4>
							<p><b>Session :</b> 2019-20</p>
			        <p><b>Result  : </b>92%</p>
			      </div>
			    </li>

		



					<li>
			      <div className="content">
						<img className="/img-fluid mx-auto d-block mb-30" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" style={{height:"40px"}} alt=""/>
			        <h4>
			          <time> DevOps Testing </time>
								<br/>
								<time>Certification</time>
			        </h4>
							<p><b>Session :</b> 2019-20</p>
			        <p><b>Result  : </b>98%</p>
			      </div>
			    </li>

			  </ul>
			</section>		

	


	
		   

            <footer className="footer-area section-gap">
              <Footer/>
            </footer>

      </React.Fragment>
    )
  }
}
export default About