
export const setColor = {
    mainColor: "#CF52FE",
    primaryColor: "#11E5B3",
    mainWhite: "#fff",
    
};

export const setFont = {
    exo: "font-family: 'Exo_2', sans-serif;",
    cyber: "font-family: 'Cyberpunk';",
    over: "font-family: 'Font_Over';"
};

export const setBackground = ({
    img = " ",
} = {}) => {
    return `background: url(${img}) center center/cover no-repeat`;
};

export const setRem = (number = 16) => {
    return `${number / 16}rem`;
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
    return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBorder = ({
    width = "1px",
    style = "solid",
    color = "#11E5B3"
} = {}) => {
    return `border:${width} ${style} ${color}`;
};