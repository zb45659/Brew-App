import React, {Component} from "react"
import "./Brewery.css"


class Brewery extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this.props.breweries) // pulling empty object

        let breweries = this.props.breweries.map((brewery,index) => {
            return (
                <div className='row' key={index}>
                    <p>{brewery.name}</p>
                    <p className="brew_type">Style: <i>{brewery.brewery_type}</i></p>
                <div className="brew_address">
                    Address: {brewery.street}, {brewery.city}, {brewery.state}
                </div>
                <div className="brew_address">
                    <a href={"" + brewery.website_url}>{brewery.name}</a>
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