import React, {Component} from 'react';
import '../App.scss';


class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    }
  }
  componentWillMount(){
    //before component even shows up
    const allImgs = [
            'https://images.craigslist.org/00f0f_1I0mIK212lc_600x450.jpg',
            'https://images.craigslist.org/00b0b_k8BxIsUsjNI_600x450.jpg',
            'https://images.craigslist.org/00000_1hxKl5Q2ODA_600x450.jpg',
            'https://images.craigslist.org/00x0x_ku4tKUA5Zgx_600x450.jpg',
            'https://images.craigslist.org/00b0b_juJ42iAPVmP_600x450.jpg',
            'https://images.craigslist.org/00202_b4l6npFwmQg_600x450.jpg'
        ] 
    this.setState({
        allImgs,
        currentImg: allImgs[this.state.currentIndex]
    })
  }

  allImgsLoop = () => {
      return this.state.allImgs.map((item, i) => {
          return(
            <div key={i} onClick={this.clickedThumb.bind(null, i)}className='thumb-img' style={{"backgroundImage": `url('${item}')`}}></div>
          )
      })
  }

  nextBtn = () => {
      if (this.state.currentIndex != this.state.allImgs.length-1) {
          this.setState({
              currentIndex: this.state.currentIndex+1
          })
      }
  }

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
    this.setState({
        currentIndex: this.state.currentIndex-1
        })
    }
 }
 clickedThumb = (index) => {
    this.setState({
        currentIndex: index
    })
 }
  render() {
    const {match, location, history} = this.props
  return (
                <div className='gallery'>
                  <div className='slider'>
                    <div className='main-image'>
                      <div className='arrows left-arrow' onClick={this.prevBtn}><i className="fas fa-chevron-left"></i></div>
                      <div className='arrows right-arrow' onClick={this.nextBtn}><i className="fas fa-chevron-right"></i></div>
                      <div className='image-1' style={{"backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`}}>
                      </div>
                    </div>
                  </div>
                  <div className='thumbnails'>
                    {this.allImgsLoop()}
                  </div>
                
              </div>
             
  );
}
}
export default Gallery;