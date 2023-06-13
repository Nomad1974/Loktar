import React from 'react'
import styled from 'styled-components';
import { setRem, setFont, setBackground } from '../style/style';
import Menu from '../components/Menu';
import WelcomeScreen from '../components/WelcomeScreen';
import Header from '../components/Header';


const FirstScreen = ({className}) => {
    return (
        <section className={className}>
            <Menu />
            <WelcomeScreen />
            <Header 
                text="жизнь"
                margin={setRem(110)}
            />
        </section>
    );
};


export default styled(FirstScreen)`
    width: 100%;
    height: ${setRem(1330)};
    padding: ${setRem(37)} ${setRem(79)} ${setRem(240)} ${setRem(79)};
    ${props => setBackground({img: props.img})};
    Header {
        margin: ${setRem(144)} auto 0 auto;
    }
`;

