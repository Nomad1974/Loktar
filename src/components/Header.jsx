import styled from "styled-components";

import React from 'react'
import { setColor, setFont, setRem } from "../style/style";

const Header = ({className, text, margin}) => {
    return (
        <div className={className}>
            <h1>{text}</h1>
        </div>
    )
}

export default styled(Header)`
    width: ${setRem(1230)};
    height: ${setRem(120)};
    color: ${setColor.mainWhite};
    ${setFont.cyber};
    font-size: ${setRem(130)};
    text-align: center;
    text-transform: uppercase;
    margin-top: ${props => props.margin};
    margin-left: auto;
    margin-right: auto;
`;
