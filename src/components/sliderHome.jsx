import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carrossel extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: null,
        nextArrow: null,
        arrows: false,
      };

      const sliderStyle = {
        width:'100%',
        height:'400px',
      };
  
      return (
        <div id='slick_slider'>
          <Slider {...settings}>
            <div>
              <img src="./src/assets/slide1.jpg" alt="Vamos Juntos. WiseCare." style={sliderStyle}/>
            </div>
            <div>
                <img src="./src/assets/slide2.jpg" alt="Plataforma de home care." style={sliderStyle}/>            
            </div>
            <div>
                <img src="./src/assets/slide3.jpg" alt="Qualidade, segurança e transparência. Acesse noss plataforma e encontre a melhor opção para a sua necessidade." style={sliderStyle}/>            
            </div>
          </Slider>
        </div>
      );
    }
  }
  
  export default Carrossel;
  