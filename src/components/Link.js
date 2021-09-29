import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Link = (props) => {

    const history = useHistory();

    return(
        <Container>
            <Icon src={props.icon} />

            <Name onClick={(e) => {e.preventDefault(); history.push(props.href)}} href={props.href}>{props.text}</Name>
        </Container>
    );

}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
`;

const Icon = styled.img`
    color: white;  
    width: 20px;
    height: 20px; 
    margin-right: 5px;
`;

const Name = styled.a`
    padding-top: 2px;
    letter-spacing: .4px;
    font-size: 14px;
    display: inline-block;
    transition: all .15s linear;
    position: relative ;
    &:after{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0px;
        height: 2px;
        width: 0%;
        opacity: 0.3;
        background-color: #f9f9f9;
        transition: all .15s linear;
        }
    &:hover {
        :after{
            width: 100%;
            opacity: 1;
        }
    }

`;

export default Link; 