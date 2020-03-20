import React, {Component} from 'react';
import '../../App.scss';


class Details extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render() {
    const {match, location, history} = this.props
  return (
    <div className='details-page'>
        <div className='container'>
          <div className='white-box'>

            <section className='submenu'>
              <div className='direction'>
                <a href='#' className='prev'>Prev</a>
                <a href='#' className='next'>next</a>
              </div>

              <nav className='sub-links'>
                <a href='#'>More Ads by User</a>
                <a href='#'>Print</a>
                <a href='#'>Share</a>
                <a href='#'>Contact Seller</a>
              </nav>
            </section>

            <section className='content-area'>
              <div className='media-column'>
                <div className='gallery'>
                  <div className='slider'>
                    <div className='main-image'>
                      <div className='arrows left-arrow'>{'<'}</div>
                      <div className='arrows right-arrow'>{'>'}</div>
                      <div className='image-1' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}>
                      </div>
                    </div>
                  </div>
                  <div className='thumbnails'>
                    <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                    <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                  <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                  <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                  <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                  <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                  <div className='thumb-img' style={{"backgroundImage": "url('https://www.hushhush.com/wp-content/uploads/2019/01/2004-ferrari-enzo.jpg')"}}></div>
                  </div>
                </div>
              </div>
              <div className='details-column'>
                <div className='date'>Posted: Feb 28th
                </div>
                <h3 className='title'>Black 2016 BMW</h3>
                <h4 className='price'>46,000</h4>
                <div className='more-details'>
                  <div className='info'>
                    <label>Vin</label>
                    <h5>fdw543y34</h5>
                  </div>
                  <div className='info'>
                    <label>Mileage</label>
                    <h5>32098</h5>
                  </div>
                  <div className='info'>
                    <label>transmission</label>
                    <h5>Manual</h5>
                  </div>
                </div>
                <div className='description'>
                  <p>This is where the description goes</p>
                </div>
              </div>
            </section>

        </div>
          </div>
    </div>
  );
}
}
export default Details;