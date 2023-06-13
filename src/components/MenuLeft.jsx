import styled from "styled-components";
import { setColor, setFont, setRem } from "../style/style";
import { ReactComponent as UnionLeft} from "../icons/menu/UnionLeft.svg"; 
import Menu from "./Menu";

const MenuLeft = ({className}) => {
    return (
            <nav className={className}>
                <ul>
                    <li><a name="top" href="#top">меню</a></li>
                    <li>
                        <UnionLeft className="icon"/>
                    </li>
                    <li><a href={<Menu />}>функции</a></li>
                    <li><a href="#price">тарифы</a></li>
                    <li><a href="#information">справка</a></li>
                    <li><a href="#faq">faq</a></li>
                </ul>
            </nav>
    )
}

export default styled(MenuLeft)`
    width: ${setRem(367)};
    height: ${setRem(194)};
    ${setFont.over};
    font-size: ${setRem(16)};
    line-height: ${setRem(19.2)};
    text-align: left;
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
    a {
        text-decoration:none;
        color: ${setColor.mainColor};
    }
`;
