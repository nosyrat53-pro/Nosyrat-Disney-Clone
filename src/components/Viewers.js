import styled from 'styled-components';
import React from 'react';

// Import viewers images
import im1 from '../images/viewers-disney.png';
import im2 from '../images/viewers-marvel.png';
import im3 from '../images/viewers-national.png';
import im4 from '../images/viewers-pixar.png';
import im5 from '../images/viewers-starwars.png';

//import viewers videos
import vid1 from '../videos/1564674844-disney.mp4';
import vid2 from '../videos/1564676115-marvel.mp4';
import vid3 from '../videos/1564676296-national-geographic.mp4';
import vid4 from '../videos/1564676714-pixar.mp4';
import vid5 from '../videos/1608229455-star-wars.mp4';

const Viewers = (props) => {

    return(
        <Container>
            <Wrap>
                <img src={im1} />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src={vid1} type="video/mp4"></source>
                </video>
            </Wrap> 
            <Wrap>
                <img src={im2} />
                <video autoPlay={true} loop={true} playsInline={true} muted >
                    <source src={vid2} type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src={im3} />
                <video autoPlay={true} loop={true} playsInline={true} muted >
                    <source src={vid3} type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src={im4} />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src={vid4} type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src={im5} />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src={vid5} type="video/mp4"></source>
                </video>
            </Wrap>
        </Container>
    );

}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap:25px;  
    gap: 25px;
    grid-template-columns: repeat(5 , minmax(0,1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(1,minmax(0,1fr)) ;
    }
`;

const Wrap = styled.div`
    padding-top: 30%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    transitino: all 250ms cubic-bezier(0.25 , 0.46 , 0.94);
    border: 3px solid rgba(249,249,249,.1);
    position: relative;

    img{
        height: 100%;
        width: 100%;
        transition: opacity 500ms ease-in-out;
        z-index: 1;
    }

    video{
        position:absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0 ;
        transition-duration: 300ms;
        transform: scaleY(1.8);
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px 16px , 
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.03);
        border-color: rgba(249,249,249,.8);
        img{
            opacity: 0;
            transition-duration: 300ms;
        }
        video{
            opacity: 1;
            transition-duration: 300ms;
        }
    }
`;

export default Viewers; 