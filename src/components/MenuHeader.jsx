import styled from "styled-components";
import { setColor, setFont, setRem } from "../style/style";

const Header = styled.h1`
    ${setFont.cyber};
    font-size: ${setRem(320)};
    color: ${setColor.mainWhite};
    text-transform: uppercase;
    margin: ${setRem(162)} auto 0 auto;
`;

const MenuHeader = () => {
    return (
        <>
            <Header>жизнь</Header>
        </>
    )
}

export default MenuHeader
