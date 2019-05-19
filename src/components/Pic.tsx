import React, { Component } from 'react'

interface PicProps{

    src?:any,
    title?:any,
    description?:any,
    ImageUrl?:any

}

class Pic extends Component<PicProps> {
    state={
     
        src:this.props.src,
        title:this.props.title,
        description:this.props.description,
        url:this.props.ImageUrl
    }
  render() {
    return (
      <React.Fragment>
          <div className="single-portfolio col-sm-4 all">
                            	<div className="relative">
	                            	<div className="thumb">
	                            		<div className="overlay overlay-bg"></div>
	                            		 <img className="image img-fluid" src={this.state.src} alt=""/>
	                            	</div>
									<a href={this.state.url} className="img-pop-up">	
									  <div className="middle">
									    <div className="text align-self-center d-flex"><img src="/img/preview.png" alt=""/></div>
									  </div>
									</a> 
	                            		
	                           	</div>
                                <div className="p-inner">
                                    <h4>{this.state.title}</h4>
                                    <div className="cat">{this.state.description}</div>
                                </div>
                            </div>
      </React.Fragment>
    )
  }
}
export default  Pic;