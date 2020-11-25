import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './Homepage.css'

class Homepage extends Component {
    render(){


        return (
            <div className="body">
                <h1><i>Brew</i> Cation</h1>
                  
                    <div className="homepageNav">
                        <nav className="homepageNavBar">
                            <Link to='/info' className="homepageLink">
                                ABOUT US
                            </Link>
                            <Link to='/breweries' className="homepageLink">
                                BREW LIST
                            </Link>
                        </nav>
                    </div>

                <footer className="footer">
                    <p>&copy; 2020 BrewCation | Austin & Zac Benckendorf GA students &middot;</p>
                </footer>
                
            </div>


        )


    }
}

export default Homepage