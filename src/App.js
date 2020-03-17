import React, {Component} from 'react';
import './App.scss';
//import Craigslist from './components/App';
import Header from './components/Header';
import Home from './components/Pages/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
}
export default App;
