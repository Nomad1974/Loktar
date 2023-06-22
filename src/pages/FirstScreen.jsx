import React from 'react'
import styled from 'styled-components';
import { setRem, setFont, setBackground, setColor } from '../style/style';
import Menu from '../components/Menu';
import WelcomeScreen from '../components/WelcomeScreen';
import Header from '../components/Header';
import { ReactComponent as Decoration } from '../icons/menu/image37.svg';
import Title from '../components/Title';



const FirstScreen = ({className}) => {
    return (
        <section className={className}>
            <Menu />
            <WelcomeScreen />
            <Header 
                text="жизнь"
                margin={setRem(110)}
            />
            <SubTitle>
                <TextWrapper>таргетолога не будет прежней</TextWrapper>
                <Decoration />
            </SubTitle>
            <Title title={"старт"}/>
        </section>
    );
};

const SubTitle = styled.div`
    width: ${setRem(493)};
    height: ${setRem(52)};
    margin: ${setRem(110)} ${setRem(519)} 0 ${setRem(760)};
    
`;

const TextWrapper = styled.span`
    width: ${setRem(400)};
    height: ${setRem(31)};
    margin-left: ${setRem(100)};
    ${setFont.exo};
    font-size: ${setRem(26)};
    color: ${setColor.mainWhite};
`;

export default styled(FirstScreen)`
    width: 100%;
    height: ${setRem(1330)};
    padding: ${setRem(37)} ${setRem(79)} ${setRem(240)} ${setRem(79)};
    ${props => setBackground({img: props.img})};
    Header {
        margin: ${setRem(144)} auto 0 auto;
    }
`;

