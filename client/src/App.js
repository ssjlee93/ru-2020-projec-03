import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Landing from "./components/pages/Landing";
import Main from "./components/pages/Main";
import Category from "./components/category";
import Dropdown from "./components/Dropdown";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Dropdown />
        <Category />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/signout" component={Landing} />
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
