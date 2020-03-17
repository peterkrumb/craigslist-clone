import React, {Component} from 'react';
import '../App.scss';


class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
  return (
    <header>
      <div className={'left-menu'}>
        <div className={'logo'}>Craigslist</div>
        <div className={'city'}>San Francisco<i className={`fas fa-chevron-down`}></i>
        </div>
        
      </div>
      <div className = {'right-menu'}>
        <div className={'user-img'}>img</div>
        <div className={'user-dropdown'}>my account
        <i className={`fas fa-chevron-down`}></i>
        </div>
        <div className={'post-btn'}>post to classifieds</div>
      </div>
    </header>
  );
}
}
export default Header;
