import styled from "styled-components";
import { ReactComponent as RightArrow } from "../icons/menu/arowRight.svg";
import { ReactComponent as LeftArrow } from "../icons/menu/arowLeft.svg";
import { setBorder, setColor, setFlex, setFont, setRem } from "../style/style";

const Button = ({className, width, height}) => {
    return (
        <button className={className}>
            <span>
                <LeftArrow />
            </span>
            <span>старт</span>
            <span>
                <RightArrow />
            </span>
        </button>
    )
}

export default styled(Button)`
    ${setFlex({ x: 'space-around', y: 'center' })};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${setRem(22)} auto 0 auto;
    border: 1px solid #11e5b3;
    background: linear-gradient(
        16deg,
        rgba(0, 137.06, 104.74, 0.8) 0%,
        rgba(12, 30, 48, 0) 100%
    );
    ${setFont.over};
    font-size: ${setRem(22)};
    font-weight: 500;
    color: ${setColor.mainWhite};
`;
        