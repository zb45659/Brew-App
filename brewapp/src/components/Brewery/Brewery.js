import React, {Component} from "react"
import "./Brewery.css"
import Button from 'react-bootstrap/Button'


class Brewery extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this.props.breweries) // pulling empty object

        let breweries = this.props.breweries.map((brewery,index) => {
            return (
                <div className='row' key={index}>
                    <p className="brew_name">{brewery.name}</p>
                    <p className="brew_type"><i>{brewery.brewery_type} Brewery</i></p>
                <div className="brew_address">
                    {brewery.street}, {brewery.city}, {brewery.state}
                </div>
                <br></br>
                <div>
                <a href={"" + brewery.website_url} target="_blank">
                    <button class="homeButton"> 
                        {brewery.name} <i className="fa fa-home"></i>
                    </button> 
                </a> 
                </div>

                </div>       
            )
            })

            return (
                <main className="brewery">
                    
                        <div className='table'>
                            {breweries}
                        </div>
    
                </main>
            )
    }
}

export default Brewery