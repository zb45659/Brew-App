import React, {Component} from "react"
import Brewery from '../Brewery/Brewery'

import {Route,Link}  from 'react-router-dom'

class BrewList extends Component {
    
    // constructor(props) {
    //     super(props)
    // }

    render() {
       
    return (
    <div>
    <Link to='/breweries'> Breweries </Link>
    </div>
    )
  }
}

export default BrewList