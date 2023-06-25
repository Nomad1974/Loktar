import styled from "styled-components";
import { setRem } from "../style/style";

const Container = ({children, className, paddingTop, paddingBottom = 0}) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default styled(Container)`
        max-width: ${setRem(1760)};
        margin: 0 auto;
        padding-top: ${props => props.paddingTop};
        padding-bottom: ${props => props.paddingBottom};
`;