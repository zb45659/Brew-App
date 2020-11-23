import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Homepage extends Component {
    render(){


        return (
            <div>
                <h1>BrewCation</h1>
                <Link to='/brewlist'>
                    Brew List
                </Link>
                {/* <Link to='contact-list'>
                    Contact List
                </Link> */}
                
            </div>


        )


    }
}

export default Homepage