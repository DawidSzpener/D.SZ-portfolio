import React from 'react';
import Slider from 'infinite-react-carousel';
import './AboutMe.css'
import makers01 from '../../assets/images/makers02.jpg'
import makers02 from '../../assets/images/makers03.jpg'
import fishing01 from '../../assets/images/fishing01.jpeg'
import fishing02 from '../../assets/images/fishing02.jpeg'
import travel01 from '../../assets/images/travel01.png'
import travel02 from '../../assets/images/travel02.jpg'
import cooking01 from '../../assets/images/cooking01.jpg'
import cooking02 from '../../assets/images/cooking02.jpg'
import strzal01 from '../../assets/images/strzal01.jpg'
import strzal02 from '../../assets/images/strzal02.jpg'
import ja01 from '../../assets/images/ja01.jpg'
import ja02 from '../../assets/images/ja02.jpg'

const AboutMe = () => (
  <Slider dots swipe={true} autoplay={true} autoplaySpeed={5000} arrows={false}>
    <div className="AboutMeSlides">
      <img id="img03" src={ja01} alt="obrazek"/>
      <img id="img04" src={ja02} alt="obrazek"/>
      <h4 style={{marginTop: "5%"}}>Hello!   I'm Dawid.</h4>
    </div>
    <div className="AboutMeSlides">
      <img id="img01" src={makers01} alt="obrazek"/>
      <img id="img02" src={makers02} alt="obrazek"/>
      <h4 style={{marginTop: "20%"}}>I have studied coding in London.</h4>
    </div>
    <div className="AboutMeSlides">
      <img id="img05" src={cooking01} alt="obrazek"/>
      <img id="img06" src={cooking02} alt="obrazek"/>
      <h4 style={{marginTop: "0%"}}>I cook in my free time.</h4>
    </div>
    <div className="AboutMeSlides">
      <img id="img03" src={fishing01} alt="obrazek"/>
      <img id="img04" src={fishing02} alt="obrazek"/>
      <h4 style={{marginTop: "5%"}}>Or fish.</h4>
    </div>
    <div className="AboutMeSlides">
      <img id="img07" src={travel02} alt="obrazek"/>
      <img id="img08" src={travel01} alt="obrazek"/>
      <h4 style={{marginTop: "6%"}}>Sometimes I travel.</h4>
    </div>
    <div className="AboutMeSlides">
      <img id="img09" src={strzal01} alt="obrazek"/>
      <img id="img10" src={strzal02} alt="obrazek"/>
      <h4 style={{marginTop: "4%"}}>And shoot.</h4>
    </div>
  </Slider>
);

export default AboutMe
