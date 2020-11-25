import React, {Component} from "react"
import {Link}  from 'react-router-dom'
import './BrewList.css'

class BrewList extends Component {

    render() {
       
    return (
    <main className="brewList">
      <div className="info">
            <div className="infoInside">
              <h2>about us</h2>
              <h2>----------</h2>
              
              <br></br>
              <p>We are a licensed craft beer location provider. We know how hard it can be to find quality beer, so we created a way track the different breweries in your states and cities. Our goal is to popularize the consumption of craft beer, and help consumers have better access to information about where to find craft beer. Ready or not, <b>BEER WE COME!</b></p>
            </div>
      </div>
      <Link to='/' className="btn1">
               <i class="fa fa-home"></i>
      </Link>
    </main>
    )
  }
}

export default BrewList