import React, {Component} from 'react';
import '../../App.scss';


class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    const {match, location, history} = this.props
  return (
    <div className='listings'>
        <div className='container'>
        </div>
    </div>
  );
}
}
export default Listings;