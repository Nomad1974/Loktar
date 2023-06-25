import React from 'react'
import styled from 'styled-components';
import { setRem, setFont, setBackground, setColor } from '../style/style';
import Menu from '../components/Menu';
import WelcomeScreen from '../components/WelcomeScreen';
import Header from '../components/Header';
import { ReactComponent as Decoration } from '../icons/menu/image37.svg';
import Title from '../components/Title';
import Container from '../components/Container';
import Button from '../components/Button';



const FirstScreen = ({className}) => {
    return (
        <section className={className}>
            <Container paddingTop={setRem(37)}>
                <Menu />
                <WelcomeScreen />
                <Header 
                    text="жизнь"
                    margin={setRem(110)}
                />
                <SubTitle>
                    <TextWrapper>таргетолога не будет прежней</TextWrapper>
                    <div className="icon-wrapper">
                        <Decoration />
                    </div>
                </SubTitle>
            <Title title={"старт"}/>
            <Button width={setRem(261)} height={setRem(54)}/>
            </Container>
        </section>
    );
};

const SubTitle = styled.div`
    width: ${setRem(493)};
    height: ${setRem(52)};
    margin: ${setRem(30)} ${setRem(101)} 0 ${setRem(851)};
    .icon-wrapper {
        width: ${setRem(453)};
        height: ${setRem(22)};
    }
`;

const TextWrapper = styled.span`
    width: ${setRem(400)};
    height: ${setRem(31)};
    margin-left: ${setRem(85)};
    ${setFont.exo};
    font-weight: 400;
    font-size: ${setRem(23)};
    color: ${setColor.mainWhite};
`;

export default styled(FirstScreen)`
    max-width: 100%;
    padding: ${setRem(1)} ${setRem(1)};
    height: ${setRem(1385)};
    ${props => setBackground({img: props.img})};
    Header {
        margin: ${setRem(144)} auto 0 auto;
    }
`;

