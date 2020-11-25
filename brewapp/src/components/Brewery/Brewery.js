import React, {Component} from "react"
import "./Brewery.css"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'; 


class Brewery extends Component {
    constructor(props) {
        super(props)

    }
    render() {

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
                        <div className="beerQuote">
                            <p>
                                "<b>LIFE</b> <i>is too</i> SHORT <small>TO DRINK</small> <b>BAD BEER</b>"
                            </p>
                        </div>
                        <div className="beerQuote2">
                            <p>
                                DON'T WORRY... BE <b>HOPPY</b> 
                            </p>
                        </div>
                        
                        <div className="arrows">
                            <i class='fas fa-arrow-right'></i><i class='fas fa-arrow-left'></i>
                        </div>
                    
                        <div className='table'>
                            {breweries}
                        </div>
                        <Link to='/' className="btn">
                            <i class="fa fa-home"></i>
                        </Link>
                </main>
            )
    }
}

export default Brewery