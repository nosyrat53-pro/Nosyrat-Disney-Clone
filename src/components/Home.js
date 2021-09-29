import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import backgroundImg from '../images/home-background.png';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

const Home = (props) => {

    const [exist, setExist] = useState(false);
    const history = useHistory();

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            setExist(true);
        } else {
            history.push("/");
            setExist(false);
        }
    });


    return (
        <>
            {exist ?
                <Container>
                    <ImgSlider />
                    <Viewers />
                    <Recommends />
                    <NewDisney />
                    <Originals />
                    <Trending />
                </Container>

                : null}
        </>

    );



}

const Container = styled.main`
    position: relative;
    top: 70px;
    background: url(${backgroundImg});
    background-size: cover;
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
`;


export default Home;