import React, { Component } from 'react';
import Pic from '../components/Pic';
import key from '../keys/key';

class Filter extends Component {
  state={
    result:"loading..."
  }


  Maper(data){
    setTimeout(() => {
      const Maps = data.items
      for(var i=0; i<Maps.length;i++){
        var first = Maps
        var result=first.map(function(first){ return  <Pic src={first.content.split(/\n/m)[4]}  title={first.title} description={first.content.split(/\n/m)[1]} ImageUrl={first.content.split(/\n/m)[7]} />})
      
      
    this.setState({
      result:result
    })
        }
    }, 1000)
}

 

  componentDidMount(){
   
		fetch(`https://www.googleapis.com/blogger/v3/blogs/${key.blogID2}/posts?key=${key.key}`,{
      method:'GET'
    })
		.then(data => data.json())
    .then(data => {this.Maper(data)})
  }

  render() {
    return (
      <React.Fragment>
                 
                    <div className="filters-content">
                        <div className="row grid">
                          
                           
                        {this.state.result}

                        </div>
                    </div>
      </React.Fragment>
    )
  }
}
export default Filter