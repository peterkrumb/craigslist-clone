import React, {Component} from 'react';
import '../App.scss';
import axios from 'axios';


class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      cityDropdown: false,
      selectedCity: 'New York City',
      citiesData: []
    }
  }

//before component even shows up
  componentWillMount() {
    const self = this;
    axios.get(`/api/cities`,
    )
  .then(function (response) {
    self.setState({
      citiesData: response.data
    }, () => {
      console.log(self.state)
    })
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  clickedCityDropdown =() => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    })
  }
  selectCity = (city) => {
    this.setState({
      selectedCity: city
    }, () => {
      let city = this.state.citiesData.filter((item) => {
        return item.title == this.state.selectedCity
      })
      const {match, history} = this.props
      history.push(`/${city[0].slug}`)
    })
  }
  loopCities =() => {
    const self = this;
    return this.state.citiesData.map((item, i) => {
      return(
        <li key={i} onClick={this.selectCity.bind(null, item.title)}>{item.title}</li>
      )
    })
  }
  render() {
  return (
    <div className='container'>
    <header>
      

      <div className={'left-menu'}>
        <div className={'logo'}>Craigslist</div>
        <div className={'city-dropdown'} onClick={this.clickedCityDropdown}>
          {this.state.selectedCity}
          <i className={`fas fa-chevron-down
          ${(this.state.cityDropdown) ? 'fa-chevron-up': 'fa-chevron-down'}` } />
          <div className={`scroll-area 
          ${(this.state.cityDropdown) ? 'active': 
          ''}`}>
          <ul> 
            {this.loopCities()}
          </ul>
          </div>
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
    </div>
  );
}
}
export default Header;
