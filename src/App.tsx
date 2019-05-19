import React, { Component } from 'react'
import Home from './views/Home';
import {BrowserRouter as ReactR, Route, Switch,} from 'react-router-dom'
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Designs';
import Projects from './views/Projects';
import Errors from './views/Error'


 class App extends Component {
  
  render() {
    return (
      <React.Fragment>

 <ReactR>
   <Switch>
   <Route path="/" component={Home} exact/>
   <Route path="/about"  component={About} exact/>
   <Route path="/contact-me"  component={Contact} exact/>
   <Route path="/designs"  component={Portfolio} exact/>
   <Route path="/projects"  component={Projects} exact/>

   <Route component={Errors} exact/>
   </Switch>
 </ReactR>
    </React.Fragment>
    )
  }
}



export default App;
