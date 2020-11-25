import React, { Component } from 'react';
import Homepage from '../Homepage/Homepage'
import BrewList from '../BrewList/BrewList'
import {Route, Link, Switch} from "react-router-dom";
import Brewery from '../Brewery/Brewery';
import MapContainer from '../map/Map'



const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District_of_Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New_Hampshire','New_Jersey','New_Mexico','New_York','North_Carolina','North_Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode_Island','South_Carolina','South_Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West_Virginia','Wisconsin','Wyoming']
const type = ['micro','nano','regional','brewpub','large','planning','bar','contract','proprietor','closed']
const cities = ['Portland','Asheville','Bend','Boulder','Boston','Cleveland','Milwaukee','San Francisco','New York','Minneapolis','Chicago','Seattle','Denver','San Diego']
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
      const url = `https://api.openbrewerydb.org/breweries?${query}&per_page=50`;
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
  return (
    <div className="App">
      <div>
     <Route exact path='/' render={() =>
     <Homepage/>}/>
     </div>
     <main>
      <Switch>
      <Route exact path='/info' render={() =>
      <BrewList/>}/>
      <Route exact path='/map' render={(props) =>
      <MapContainer {...props} {...this.state}/>}/>
     <div className="brewerys">
      <select className="brewFilter"
        value={this.state.query}
        onChange={this.handleChange}
      >
       <option value="">Choose State</option>
        <option value="by_state=Arizona">Arizona</option>
        <option value="by_state=California">California</option>
        <option value="by_state=Colorado">Colorado</option>
        <option value="by_state=Illinois">Illinois</option>
        <option value="by_state=Iowa">Iowa</option>
        <option value="by_state=Michigan">Michigan</option>
        <option value="by_state=Minnesota">Minnesota</option>
        <option value="by_state=New_York">New York</option>
        <option value="by_state=North_Carolina">North_Carolina</option>
        <option value="by_state=Oregon">Oregon</option>
      </select>
      <select className="brewFilter"
        value={this.state.query}
        onChange={this.handleChange}
      >
       <option value="">Choose Type</option>
       <option value="by_type=micro">Micro</option>
        <option value="by_type=brewpub">Brewpub</option>
        <option value="by_type=bar">Bar</option>
        <option value="by_type=nano">Nano</option>
        <option value="by_type=regional">Regional</option>
        <option value="by_type=large">Large</option>
        <option value="by_type=planning">Planning</option>
        <option value="by_type=contract">Contract</option>
        <option value="by_type=proprietor">Proprietor</option>
      </select>
      <select className="brewFilter"
        value={this.state.query}
        onChange={this.handleChange}
      >
       <option value="">Choose City</option>
       <option value="by_city=Boston">Boston</option>
       <option value="by_city=Boulder">Boulder</option>
       <option value="by_city=Chicago">Chicago</option>
       <option value="by_city=Cleveland">Cleveland</option>
       <option value="by_city=Denver">Denver</option>
       <option value="by_city=Milwaukee">Milwaukee</option>
       <option value="by_city=Portland">Portland</option>
       <option value="by_city=San_Diego">San Diego</option>
       <option value="by_city=San_Francisco">San Francisco</option>
      </select>
     <Route path='/breweries' render={(props) =>
     <Brewery {...props} {...this.state}/>}/>
     </div>
     </Switch>
     </main>
     </div>
  );
}
}
export default App;