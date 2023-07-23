import styled from "styled-components";
import { ReactComponent as StartButton } from "../components/buttons/startButton.svg";
import { setRem } from "../style/style";

const Button = ({className, width, height}) => {
    return (
        <div className={className}>
            <StartButton className="start-button"/>
        </div>
        
    );
};

export default styled(Button)`
    padding: 0;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${setRem(22)} auto 0 auto;
    cursor: pointer;
`;
        