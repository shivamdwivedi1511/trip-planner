import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PlanDetails from './components/planList/PlanDetails';
import Login from './components/Authentication/Login'
import NewTrip from './components/planList/NewTrip'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
      
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/plan/:id' component={PlanDetails}/>
        <Route path='/login' component={Login}/>
        <Route path='/newtrip' component={NewTrip} />
      </Switch>
    </div>
    </BrowserRouter>
     
    );
  }
}

export default App;
