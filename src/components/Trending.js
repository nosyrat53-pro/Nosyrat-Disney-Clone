import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import ims from '../images/logo.svg';
import data from '../dataMovies';

const Trending = (props) => {
    return (
        <Container>
            <h3>Trending</h3>
            <Content>
            {data.trending.map((movie , key) => {
                return(
                    <Wrap key={key}>
                            <Link to={'/details/'+ movie.id}>
                                <img src={movie.cardImg} />
                            </Link>
                        </Wrap>
                );
            })}
            </Content>
        </Container>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
    margin-bottom: 50px;
`;

const Content = styled.div`
    padding-top: 30px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4 , minmax(0,1fr)) ;

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0,1fr)) ;
    }
`;

const Wrap = styled.div`

    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    position: relative;
    transition: all 250ms cubic-bezier(.25,.46,.45,.94) ;
    border: 3px solid rgba(249 , 249 , 249 , .1);
    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        width: 100%;
        transition: opacity 500ms ease-in-out;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px 16px , 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.03);
        border-color: rgba(249 , 249 , 249 , .8);
    }
`;

export default Trending;