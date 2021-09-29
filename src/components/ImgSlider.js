import React from 'react';
import Styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//Importing all images for the slider
import im1 from '../images/slider-badag.jpg';
import im2 from '../images/slider-badging.jpg';
import im3 from '../images/slider-scale.jpg';
import im4 from '../images/slider-scales.jpg';
import styled from 'styled-components';

const ImgSlider = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      
    return(
        <>
        <Carousel {...settings} >
          <Wrap>
              <a>
              <img src={im1} />
              </a>
          </Wrap>
          <Wrap>
            <a>
              <img src={im2} />
              </a>
          </Wrap>
          <Wrap>
            <a>
              <img src={im3} />
              </a>
          </Wrap>
          <Wrap>
            <a>
              <img src={im4} />
              </a>
          </Wrap>
        </Carousel>
        </>
    );

}

const Carousel = Styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0; 
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover{
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }

  ul li button {
    &:before{
      font-size: 10px;
      color: rgb(150,158,171)
    }
  }

  li.slick-active button:before{
    color: white;
  }

  .slick-list{
    overflow: initial;
  }

  .slick-prev{
    left: -45px;
  }

  .slick-next{
    right: -45px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  border: 4px solid transparent; 
  transition-duration: 300ms;
  a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
                rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    padding: 4px;
    transition-duration: 300ms;
  }

  img{
    width: 100%;
    height: 100%; 
  }

  &:hover{
    border: 4px solid rgba(249,249,249,.8);
    transition-duration: 300ms; 
  }
`;

export default ImgSlider;