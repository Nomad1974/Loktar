import styled from "styled-components";

import React from 'react'
import { setColor, setFont, setRem } from "../style/style";

const Header = ({className, text, margin}) => {
    return (
        <div className={className}>
            <span>{text}</span>
        </div>
    )
}

export default styled(Header)`
    width: ${setRem(1100)};
    height: ${setRem(197)};
    color: ${setColor.mainWhite};
    ${setFont.cyber};
    font-size: ${setRem(190)};
    text-align: center;
    text-transform: uppercase;
    margin-top: ${props => props.margin};
    margin-left: auto;
    margin-right: auto;
    span {
        width: 100%;
        height: 100%;
    }
`;
