import React, {Component} from "react"
import Brewery from '../Brewery/Brewery'

// import {Link} from 'react-router-dom'

class BrewList extends Component {

    render() {
        console.log(this.props.breweries)
        const breweries = this.props.breweries.map((brewery,index) => {
            return (
                <div key={index}>
                    <Brewery
                    name = {brewery.name}
                    brewery_type = {brewery.brewery_type}
                    city = {brewery.city}
                    state = {brewery.state}
                    />
                </div>
            )
        })
          return(
              <div>
                  <h1> test </h1>
                  <h1>Breweries</h1>
                  {breweries}
              </div>
          )
           
}
}


export default BrewList