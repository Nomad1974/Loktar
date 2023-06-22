import styled from "styled-components";
import { ReactComponent as Rectangle } from "../components/rectangles/Welcome screen.svg";
import { setBorder, setColor, setFlex, setFont, setRem } from "../style/style";

const WelcomeScreen = ({className}) => {
    return (
        <div className={className}>
            <Rectangle className="icon" />
            <div className="last-string-wrapper">
                <span className="digital-helper">
                    цифровой помошник l
                </span>
                <ul>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </div>
        </div>
    )
}

export default styled(WelcomeScreen)`
    position: relative;
    margin: ${setRem(-20)} ${setRem(1047)} 0 ${setRem(350)};
    width: ${setRem(346)};
    height: ${setRem(177)};
    .icon {
        width: 100%;
    }
    .last-string-wrapper {
        ${setFlex({x: "space-between", y: "center"})};
        width: ${setRem(316.83)};
        height: ${setRem(10)};
        margin-left: ${setRem(29.17)};
        
    }
    .digital-helper {
        ${setFont.exo};
        color: ${setColor.primaryColor};
        font-size: ${setRem(8)};
        text-transform: uppercase;
    }
    ul{
        width: ${setRem(54.27)};
        height: ${setRem(5.31)};
        ${setFlex({x: "space-between", y: "center"})};
        ${setColor.primaryColor};
        span{
            display: block;
            width: ${setRem(5.31)};
            height: ${setRem(5.31)};
            ${setBorder({width: "3px"})};
            border-radius: 50%;
        }
    }
`;
