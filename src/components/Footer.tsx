import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
      <React.Fragment>
         <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>About Me</h4>
                                <p>
                                    We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
                                </p>
                                <p className="footer-text">
SomitraSR &copy; 2019
</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Newsletter</h4>
                                <p>Stay updated with our latest trends</p>
								<div className="" id="mc_embed_signup">
                              <a href="https://medium.com/@SomitraSR" className="medium"> <i className="fab fa-medium"></i></a> 
								</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                            <div className="single-footer-widget">
                                <h4>Follow Me</h4>
                                <p>Let us be social</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href="https://www.facebook.com/SomitraSR"><i className="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/SomitraSR"><i className="fa fa-twitter"></i></a>
                                    <a href="https://www.behance.net/somitra"><i className="fa fa-behance"></i></a>
                                    <a href="https://www.instagram.com/somitrasr/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/somitrasr/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </React.Fragment>
    )
  }
}
export default Footer;