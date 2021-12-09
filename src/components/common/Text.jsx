import React from "react";
import "./Text.css";

function Text({ title = "", subtitle = "", subtitle2 = "", subtitleitalic = false}) {
    return (
        <div className="header-text">
        <h2 className="header-title">{title}</h2>
        <h4 className="header-subtitle-2">{subtitle2}</h4>
        <p className={`header-subtitle ${subtitleitalic ? "subtitleitalic" : ""}`}>
        {subtitle}
        {subtitleitalic}
        </p>
        </div>
    );
  }
  
  export default Text;