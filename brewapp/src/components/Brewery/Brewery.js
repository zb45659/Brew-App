import React, {Component} from "react"


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
                <div>
                Address: {brewery.street}, {brewery.city}, {brewery.state}
                </div>


                </div>       
            )
            })

            return (
                <div className='table'>
                    <h1> Breweries </h1>
                    {breweries}
                </div>
            )
    }
}

export default Brewery