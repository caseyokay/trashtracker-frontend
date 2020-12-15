import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';

class App extends React.Component{
  render(){
    return(
      <>
      <Switch>

      <Route path="/welcome" render={()=> <Welcome/>} />
      <h1>App.js Checkkk</h1>
      </Switch>
      </>
    );
  }
};

export default App;
