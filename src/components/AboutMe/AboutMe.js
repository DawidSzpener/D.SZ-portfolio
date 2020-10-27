import React from 'react';
import Slider from 'infinite-react-carousel';
import './AboutMe.css'
import bg from '../../assets/images/bg1.jpg'

const AboutMe = () => (
  <Slider dots swipe={true} autoplay={true} autoplaySpeed={5000} arrows={false}>
    <div className="AboutMeSlides">
      <img src={bg} alt="obrazek"/>
      <h1>1</h1>
    </div>
    <div className="AboutMeSlides">
      <img src={bg} alt="obrazek"/>
      <h3>2</h3>
    </div>
    <div className="AboutMeSlides">
      <img src={bg} alt="obrazek"/>
      <h3>3</h3>
    </div>
    <div className="AboutMeSlides">
      <img src={bg} alt="obrazek"/>
      <h3>4</h3>
    </div>
    <div className="AboutMeSlides">
      <img src={bg} alt="obrazek"/>
      <h3>5</h3>
    </div>
  </Slider>
);

export default AboutMe
