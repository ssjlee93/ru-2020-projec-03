import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import Navigation from '../Navigation';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import Home from '../pages/Home'; 

import AccountPage from '../Account';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
 
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


class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    },
    );
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
  <Router>
  <div>
    <Navigation authUser={this.state.authUser} />

    <hr/>
    <hr />
         <Route exact path="/" component={Landing} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/main" component={Main} />
         <Route path={ROUTES.ACCOUNT} component={AccountPage} />
         <Route exact path="/signout" component={Landing} />
  </div>
</Router>
    );
  }
}


export default withFirebase(App);
