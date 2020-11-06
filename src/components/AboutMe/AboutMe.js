import React from 'react';
import Slider from 'infinite-react-carousel';
import './AboutMe.css'
import bg from '../../assets/images/bg1.jpg'
import makers01 from '../../assets/images/makers02.jpg'
import makers02 from '../../assets/images/makers03.jpg'


const AboutMe = () => (
  <Slider dots swipe={true} autoplay={true} autoplaySpeed={5000} arrows={false}>
    <div className="AboutMeSlides">
      <img src={makers01} alt="obrazek"/>
      <h4>Jestem Dawid i lubie kodowac. </h4>
    </div>
    <div className="AboutMeSlides">
      <img src={makers02} alt="obrazek"/>
      <h4>Jestem Dawid i lubie kodowac. </h4>
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
