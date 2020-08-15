import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Home from '../Home'; 
import * as ROUTES from '../../constants/routes';
 
const App = () => (
    <Router>
      <div>
        <Navigation />
   
        <hr />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/signout" component={Landing} />
        <Footer />
      </div>
    </Router>

);
 
export default App;