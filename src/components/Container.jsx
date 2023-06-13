import styled from "styled-components";
import { setRem } from "../style/style";

/* export const Container = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
`; */

const Container = ({children, className}) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default styled(Container)`
        width: ${setRem(1140)};
        margin: 0 auto;
`;