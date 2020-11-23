import React, {Component} from "react"


class Brewery extends Component {
    constructor(props){
        super(props)

        this.state={
            name: props.name
        }
    }
    render() {
        console.log(this.props)

        return(
            <div className='brewery'>
                
                <h3> {this.props.name}</h3>
                <h4> {this.props.brewery_type}</h4>
                <h4> {this.props.city}</h4>
                <h4> {this.props.state}</h4>
        
            </div>
        )
    }

}

export default Brewery