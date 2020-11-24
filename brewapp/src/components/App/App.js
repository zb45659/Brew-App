import React, { Component } from 'react';
import Homepage from '../Homepage/Homepage'
import BrewList from '../BrewList/BrewList'
import {Route, Switch} from "react-router";
import Brewery from '../Brewery/Brewery';


const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District_of_Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New_Hampshire','New_Jersey','New_Mexico','New_York','North_Carolina','North_Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode_Island','South_Carolina','South_Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West_Virginia','Wisconsin','Wyoming']


class App extends Component {
    
    constructor() {
        super()
        
    this.token = null; 
    this.state = {
        query: "",
        breweries: []
    };
}
        
    handleChange = event => {
      let search = ""
      this.setState({
        query: event.target.value
      });
      search = event.target.value
      this.search(search);
    };
  
    search = query => {
      const url = `https://api.openbrewerydb.org/breweries?by_state=${query}&per_page=50`;
      const token = {};
      this.token = token; 
      
  
      fetch(url)
        .then(results => results.json())
        .then(data => {
            if (this.token === token) {
                this.setState({ breweries: data });
        };
    
    })
}
    
  
    componentDidMount = () => {
      this.search("");
    }

  render() {
    console.log(this.state.query)
    console.log(this.state.breweries)
  return (
    <div className="App">
      <div>
     <div className='dropdown'>
      <select 
        value={this.state.query} 
        onChange={this.handleChange} 
      >
       <option value="">Choose State</option> 
       <option value="Iowa">Iowa</option>
        <option value="Illinois">Illinois</option>
        <option value="Utah">Utah</option>
      </select>
     </div>
     <Route exact path='/' render={() => 
     <Homepage/>}/>
     </div>
     <main>
      <Switch>
     <Route path='/brewlist' render={(props) =>
     <BrewList {...props} {...this.state}/>}/>
     <Route path='/breweries' render={(props) =>
     <Brewery {...props} {...this.state}/>}/>
     </Switch>
     </main>
     </div>
   
  );
}
}

export default App;
