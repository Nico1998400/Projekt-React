import React from "react";
import "./Button.css";

const Button = ({children, filled = false}) => {
    return (
        <button className={`Styled-Button ${filled ? "filled" : "outlined"}`}>
        {children}
        </button>
    );
};

export default Button;