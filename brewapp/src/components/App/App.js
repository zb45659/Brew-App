import React, { Component } from 'react';
import Homepage from '../Homepage/Homepage'
import BrewList from '../BrewList/BrewList'
import {Route} from "react-router";
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state= {
      breweries: []
    }
  }
  
  componentDidMount = async () => {
    let response = await axios.get('https://api.openbrewerydb.org/breweries', {
      headers: {
        Accept: 'application/json'
      }
    })

    
    this.setState({
      breweries: response.data
    })
  }

  render() {
  return (
    <div className="App">
     <Route exact path='/' render={() => 
     <Homepage/>}/>
     <Route path='/brewlist' render={(props) =>
     <BrewList {...this.state}/>}/>
    </div>
  );
}
}

export default App;
