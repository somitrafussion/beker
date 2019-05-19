import React, { Component } from 'react'

interface Poster{
    author?:string,
    authorImg?:any,
    postImage?:any,
    postTitle?:string,
    postDate?:any,
    postDescription?:string,
    postUrl?:any

}

class Post extends Component<Poster> {
    state={
        author:this.props.author,
        authorImg:this.props.authorImg,
        postImage:this.props.postImage,
        postTitle:this.props.postTitle,
        postDate:this.props.postDate,
        postDescription:this.props.postDescription,
        postUrl:this.props.postUrl,
       
    }
  render() {
    return (
      <React.Fragment>
        
						<div  className="single-recent-blog col-lg-4 col-md-4">
							<div className="thumb">
								<img className="f-img img-fluid mx-auto" src={this.state.postImage} alt=""/>	
							</div>
							<div className="bottom d-flex justify-content-between align-items-center flex-wrap">
								<div>
									<img className="/img-fluid" src={this.state.authorImg} alt=""/>
									<a href="/about"><span>{this.state.author}</span></a>
								</div>
								<div className="meta">
									{this.state.postDate}
									<span className="lnr lnr-heart"></span> 15
									<span className="lnr lnr-bubble"></span> 04
								</div>
							</div>							
							<a href={this.state.postUrl}>
								<h4>{this.state.postTitle}</h4>
							</a>
							<p>
								{this.state.postDescription}
							</p>
						</div>
															
											
					
      </React.Fragment>
    )
  }
}
export default Post