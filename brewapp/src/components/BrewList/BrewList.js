import React, {Component} from "react"
import {Link}  from 'react-router-dom'

class BrewList extends Component {
    

    render() {
       
    return (
    <div>
    <Link to='/breweries'> Breweries </Link>
    </div>
    )
  }
}

export default BrewList