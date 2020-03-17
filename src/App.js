import React, {Component} from 'react';
import './App.scss';
//import Craigslist from './components/App';
import Header from './components/Header'

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
    </div>
  );
}
}
export default App;
