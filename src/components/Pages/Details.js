import React, {Component} from 'react';
import '../../App.scss';
import Gallery from '../../components/Gallery'

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
                <Gallery />
              </div>
              <div className='details-column'>
                <div className='date'>Posted: Feb 28th
                </div>
                <h3 className='title'>Black 2016 BMW</h3>
                <h4 className='price'>$46,000</h4>
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
                  <label>Description</label>
                  <p>I'm baby marfa meh taiyaki la croix adaptogen. Freegan umami listicle, heirloom la croix pop-up austin. Meditation hashtag roof party fam, banh mi jean shorts yuccie plaid artisan semiotics before they sold out disrupt. Heirloom keffiyeh flannel iPhone mumblecore vegan vape polaroid prism single-origin coffee ramps jianbing selfies raclette schlitz. Sartorial schlitz portland sriracha slow-carb, migas palo santo bitters tote bag succulents squid seitan. Put a bird on it ramps narwhal DIY hoodie helvetica microdosing locavore pork belly taxidermy air plant cliche. Hot chicken taxidermy vegan, tousled craft beer twee pour-over raclette yr aesthetic flexitarian.</p>
                  <p>I'm baby marfa meh taiyaki la croix adaptogen. Freegan umami listicle, heirloom la croix pop-up austin. Meditation hashtag roof party fam, banh mi jean shorts yuccie plaid artisan semiotics before they sold out disrupt. Heirloom keffiyeh flannel iPhone mumblecore vegan vape polaroid prism single-origin coffee ramps jianbing selfies raclette schlitz. Sartorial schlitz portland sriracha slow-carb, migas palo santo bitters tote bag succulents squid seitan. Put a bird on it ramps narwhal DIY hoodie helvetica microdosing locavore pork belly taxidermy air plant cliche. Hot chicken taxidermy vegan, tousled craft beer twee pour-over raclette yr aesthetic flexitarian.</p>
                  <p>I'm baby marfa meh taiyaki la croix adaptogen. Freegan umami listicle, heirloom la croix pop-up austin. Meditation hashtag roof party fam, banh mi jean shorts yuccie plaid artisan semiotics before they sold out disrupt. Heirloom keffiyeh flannel iPhone mumblecore vegan vape polaroid prism single-origin coffee ramps jianbing selfies raclette schlitz. Sartorial schlitz portland sriracha slow-carb, migas palo santo bitters tote bag succulents squid seitan. Put a bird on it ramps narwhal DIY hoodie helvetica microdosing locavore pork belly taxidermy air plant cliche. Hot chicken taxidermy vegan, tousled craft beer twee pour-over raclette yr aesthetic flexitarian.</p>
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