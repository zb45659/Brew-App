import React, {Component} from "react"
import Brewery from '../Brewery/Brewery'
import { Input } from "reactstrap";
import {Route,Link}  from 'react-router-dom'

const options = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District_of_Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New_Hampshire','New_Jersey','New_Mexico','New_York','North_Carolina','North_Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode_Island','South_Carolina','South_Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West_Virginia','Wisconsin','Wyoming']


class BrewList extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.state)
    return (
    <div>
    <Link to='/breweries'> Breweries </Link>
    </div>
    )
  }
}



export default BrewList