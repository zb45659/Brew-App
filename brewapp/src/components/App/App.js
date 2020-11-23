import React, { Component } from 'react';
import Homepage from '../Homepage/Homepage'
import BrewList from '../BrewList/BrewList'
import {Route} from "react-router";

class App extends Component {
  constructor() {
    super()

    // this.state= {
    //   breweries: breweries
  
    // console.log(this.state)
    // console.log(this.props)
  }
  render() {
  return (
    <div className="App">
     <h1> App </h1>
     <Homepage/>
     <Route exact path='/' render={() =>
     <BrewList/>}/>
    </div>
  );
}
}

export default App;
