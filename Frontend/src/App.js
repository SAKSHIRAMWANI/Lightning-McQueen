import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initial';
import Driver from './driver/drivercommand';
import Rider from './rider/ridercommand';
import Rider_login from './rider/riderlogin';
import Driver_login from './driver/driverlogin';
import Driver_Signup from './driver/newdriver';
import Success from './common/sucess';
import Location from './driver/update_location';

const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial" exact>
      <Initialpage />
     
       </Route>
    
      <Route path="/rider" exact>
      <Rider />
    </Route>
    <Route path="/rider/login" exact>
      <Rider_login />
    </Route>
    <Route path="/rider/signup" exact>
      <Rider />
    </Route>
    <Route path="/driver/signup" exact>
      <Driver_Signup />
    </Route>
    <Route path="/driver/login" exact>
      <Driver_login />
    </Route>
    <Route path="/driver/:did" exact>
      <Driver />
      </Route>
    
    <Route path="/driver/:did/availability" exact>
      <Location />
    </Route>
    <Route path="/driver/:did/update_location" exact>
      <Location />
    </Route>
    <Route path="/driver/:did/history_did" exact>
      <Driver_Signup />
    </Route>
    <Route path="/success" exact>
      <Success />
    </Route>
   

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;