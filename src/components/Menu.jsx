import styled from "styled-components";
import { setFlex } from "../style/style";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";


const Menu = ({className}) => {
    return (
        <aside className={className}>
            <MenuLeft />
            <MenuRight />
        </aside>
    )
}

export default styled(Menu)`
    ${setFlex({x: "space-between",y: "center"})};
`;
