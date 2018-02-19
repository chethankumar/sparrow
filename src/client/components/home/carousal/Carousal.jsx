import React from 'react';
import Slider from 'react-slick';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icons from 'react-icons-kit';
import { arrowLeft } from 'react-icons-kit/fa/arrowLeft';
import { arrowRight } from 'react-icons-kit/fa/arrowRight';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icons
      icon={arrowRight}
      size={32}
      className="next-arrow"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icons
      icon={arrowLeft}
      size={32}
      className="prev-arrow"
      onClick={onClick}
    />
  );
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Slider {...settings} className="slider">
        <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/slide1_06022018.jpg?1517894173" />
        <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/slide2_06022018.jpg?1517894244" />
        <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/slide4_06022018.jpg?1517894405" />
        <img src="https://ul-a.akamaihd.net/opt/ul-a.akamaihd.net/media/slideshow/Banner---5th_07022018.jpg?1517999574" />
      </Slider>
    );
  }
}
