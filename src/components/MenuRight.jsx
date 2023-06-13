import styled from "styled-components";

import { ReactComponent as UnionRight } from "../icons/menu/UnionRight.svg";
import { setFont, setRem } from "../style/style";

const MenuRight = ({className}) => {
    return (
        <nav className={className}>
            <ul>
                <li className="link">вход</li>
                <li>
                    <UnionRight />
                </li>
                <li className="link">начать</li>
                <li className="link">начать через елама</li>
            </ul>
        </nav>
    )
}

export default styled(MenuRight)`
    width: ${setRem(371)};
    height: ${setRem(190)};
    ${setFont.over};
    font-size: ${setRem(16)};
    line-height: ${setRem(19.2)};
    text-align: right;
    text-transform: uppercase;

    li {
        margin-bottom: ${setRem(18)};
        
    }
    li:first-child {
            margin-bottom: ${setRem(10)};
    }
    li:last-child{
        margin-bottom: 0;
    }
    .link {
        cursor: pointer;
    }
`;
