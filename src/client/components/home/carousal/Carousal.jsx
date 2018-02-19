import React from 'react';
import Slider from 'react-slick';
import { Grid, Row, Col } from 'react-flexbox-grid';
import withWidth from 'material-ui/utils/withWidth';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      arrows: true,
    };
    return (
      <Slider {...settings} className="slider">
        <div>
          <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/slide1_06022018.jpg?1517894173" />
        </div>
        <div>
          <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/slide2_06022018.jpg?1517894244" />
        </div>
        <div>
          <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/slide4_06022018.jpg?1517894405" />
        </div>
        <div>
          <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/Banner---5th_07022018.jpg?1517999574" />
        </div>
      </Slider>
    );
  }
}
