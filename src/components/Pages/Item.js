import React, {Component} from 'react';
import '../../App.scss';


class Item extends Component {
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
        <div className='Item'>
            This item is {match.params.item}
        </div>
    </div>
  );
}
}
export default Item;