import React, { Component } from 'react'
import key from '../keys/key';
import Post from './Post';


class Blog extends Component {

  state={
    result:"loading...."
  }


  Maper(data){
    setTimeout(() => {
    const Maps = data.items

for(var i=0; i<Maps.length;i++){
    var first = Maps
    var result=first.map(function(first){ return <Post key={first.id} author={first.author.displayName} postTitle={first.title} postUrl={first.url}
    postDate={first.blog.updated} postImage={first.content.split(/\n/m)[5]} postDescription={first.content.split(/\n/m)[2]}/>})
  
  
this.setState({
  result:result
})
}
}, 1000)
}



  componentDidMount(){
   
		fetch(`https://www.googleapis.com/blogger/v3/blogs/${key.blogID}/posts?key=${key.key}`,{
      method:'GET'
    })
		.then(data => data.json())
    .then(data => {this.Maper(data)})
  }

  render() {
    return (
      <React.Fragment>
   <div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 pb-30 header-text">
							<h1>Latest posts from our blog</h1>
							<p>
								You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business
							</p>
						</div>
					</div>
          <div className="row">	
				{this.state.result}
        </div>
				</div>	
      </React.Fragment>
    )
  }
}

export default Blog;