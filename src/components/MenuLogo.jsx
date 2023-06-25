import styled from "styled-components"
import { ReactComponent as Logo } from '../icons/menu/Vector.svg';
import { setRem } from "../style/style";

const MenuLogo = ({className}) => {
    return (
        <div className={className}>
            <div className="filter" />
            <div className="logo-wrapper">
                <Logo />
            </div>
        </div>
    )
}

export default styled(MenuLogo)`
    width: ${setRem(69)};
    height: ${setRem(57.4)};
    align-self: flex-start;
    position: relative;
    
    .filter {
        width: 100%;
        height: ${setRem(57.4)};
        background: linear-gradient(343deg, #E576FF 0%, #EE96FF 100%);
        filter: blur(50px);
        box-shadow: 50px 50px 50px;
        border-radius: 9999;
    }
    
    .logo-wrapper {
        width: ${setRem(42)};
        height: ${setRem(53)};
        position: absolute;
        top: 0;
        left: 30%;
    }
`;
