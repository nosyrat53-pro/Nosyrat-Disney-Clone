import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import data from '../dataMovies';
import play1 from '../images/play-icon-black.png';
import play2 from '../images/play-icon-white.png';
import group from '../images/group-icon.png';

const Details = (props) => {

    const [movie , setMovie] = useState({});
    const history = useHistory();

    const reverseString = (str) => {

        // empty string
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    const getIDFromLocation = (path) => {

        var id = '';

        for (let i = path.length - 1; i > 0; i--) {
            if (path[i] != '/') {
                id += path[i];
            } else {
                break;
            }
        }

        return reverseString(id);
    }

    const getMovie = (id) => {

        var mo = {};

        data.recommended.forEach(reco => {
            if (reco.id == id) {
                mo = { ...reco };
            }
        });

        data.newdisney.forEach(nedi => {
            if (nedi.id == id) {
                mo = { ...nedi };
            }
        });

        data.trending.forEach(trend => {
            if (trend.id == id) {
                mo = { ...trend };
            }
        });

        data.originals.forEach(ori => {
            if (ori.id == id) {
                mo = { ...ori };
            }
        });

        return mo ;
    }

    useEffect(()=> {
        setMovie(getMovie(getIDFromLocation(history.location.pathname))) ;
    },[]);

    return (
        <Container >
            <Background>
                <img src={movie.backgroundImg}
                alt={movie.titelImg} />
            </Background>
            <Tilte>
                {movie.title}
            </Tilte>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={play1} alt=""/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={play2} alt=""/>
                        <span>trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <Group>
                        <img src={group} alt=""/>
                    </Group>
                </Controls>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    {movie.descriptoin}
                </Description>
            </ContentMeta>
        </Container>
    );
}

const Container = styled.div`
    position: relative ;
    min-height: calc(100vh - 250px) ;
    overflow-x: hidden ;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0;
    opacity: .8;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media(max-width: 768px){
            width: initial;
        }
    }
`;

const Tilte = styled.div`
    margin-top: 100px;
    font-size: 3.5rem;
    display: inline-block;
    font-family: cursive;
    color: rgb(249,249,249);

    @media (max-width: 768px){
        font-size: 3rem;
    }
`;

const ContentMeta = styled.div`
    max-width: 784px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
    justify-content: flex-start;
`;

const Player = styled.div`
    display: flex;
    margin: 5px 6px;
    margin-left: 0;
    align-items: center;
    min-width: 70px;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid rgba(240 240 240 / 70%);
    border-radius: 5px;
    padding: 5px 10px;
    background-color: rgb(249 , 249 ,249);
    transition-duration: 100ms;
    span{
        font-size: 19px;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: rgb(30 , 30 ,30); 
        @media(max-width: 768px){
            font-size: 14px;
        }
    }
    img{
        width: 32px;
    }

    &:hover{
        background-color: rgb(200 ,200 ,200);
    }

    @media(max-width: 768px){
        height: 35px;
        img{
            width: 28px;
        }
    }

    @media(max-width: 768px){
        padding-left: 0;
        margin: 4px 6px;
        width: auto;
        padding: 4px 8px;
    }
`;

const Trailer = styled.div`
    display: flex;  
    margin: 5px 6px;
    align-items: center;
    min-width: 70px;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid rgba(240 240 240 / 70%);
    border-radius: 5px;
    padding: 5px 10px;
    background-color: rgba(0 , 0 ,0 , .3);
    border: 1px solid rgb(249,249,249);
    transition-duration: 100ms;
    span{
        font-size: 19px;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: rgb(240,240,240);

        @media(max-width: 768px){
            font-size: 14px;
        }
    }
    img{
        width: 32px;
    }

    &:hover{
        background-color: rgba(100 ,100 ,100,.4);
    }

    @media(max-width: 768px){
        height: 35px;
        img{
            width: 28px;
        }
    }

    @media(max-width: 768px){
        padding-left: 0;
        margin: 4px 6px;
        width: auto;
        padding: 4px 8px;
    }
`;

const AddList = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    margin-right: 6px;

    span{
        background-color: rgb(249,249,249);
        display: inline-block;

        &:first-child{
            height: 2px;
            transform: translate(1px , 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }

    @media(max-width: 768px){
        width: 40px;
        height: 40px;
    }
`;

const Group = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.9);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    margin-left: 10xp;

    @media(max-width: 768px){
        width: 40px;
        height: 40px;
    }
`;

const SubTitle = styled.div`
    margin-bottom: 20px;
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    color: rgb(249,249,249);

    @media (max-width: 768px){
        font-size: 1.6rem;
    }
`;

const Description = styled.div`
    line-height: 1.5;
    font-size: 1.2rem;
    letter-spacing: 1.3px;
    color: rgb(249,249,249);

    @media(max-width: 768px){
        font-size: 1.1rem;
    }
`;

export default Details;