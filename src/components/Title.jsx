import styled from "styled-components";
import { setColor, setFont, setRem } from "../style/style";


const Title = ({className, title}) => {
    return (
        <div className={className}>
            <span>
                Нажмите кнопку 
                <span className="title"> {title}</span>
                , чтобы начать
            </span>
        </div>
    );
}

export default styled(Title)`
    max-width: ${setRem(200)};
    height: ${setRem(36)};
    margin: ${setRem(50)} auto 0 auto;
    ${setFont.exo};
    text-align: center;
    line-height: 112%;
    span {
        font-size: ${setRem(14)};
        color: rgba(255, 255, 255, 0.80);
    }
    .title {
        font-size: ${setRem(19)};
        font-weight: 500;
        color: ${setColor.mainWhite};
    }
`;
