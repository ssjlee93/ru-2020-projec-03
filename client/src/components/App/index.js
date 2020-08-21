import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import Navigation from '../Navigation';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import Home from '../pages/Home'; 
import * as ROUTES from '../../constants/routes';
 
const App = () => (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/signout" component={Landing} />
      </div>
    </Router>

);
 
export default App;