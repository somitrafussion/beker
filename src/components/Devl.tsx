import React, { Component } from 'react'
import homeConfig from '../config/home';
import { Chip } from '@material-ui/core';

class Devl extends Component {
    
render() {
const name = homeConfig.devSkills.skills;
return(
    <React.Fragment>
{name.map((name)=> <Chip className="dev" label={name}/>)}
    </React.Fragment>
)

}
}

export default Devl;