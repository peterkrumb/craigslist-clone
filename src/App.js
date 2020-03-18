import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
//import Craigslist from './components/App';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Listings from './components/Pages/Listings';
import Item from './components/Pages/Item';
import Category from './components/Pages/Category';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
  return (
    <Router>
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/:city/' component={Home} />
      <Route exact path='/:city/:category/' component={Category} />
      <Route exact path='/:city/:category/:listings' component={Listings} />
      <Route exact path='/:city/:category/:listings/:item' component={Item} />
    </div>
    </Router>
  );
}
}
export default App;
