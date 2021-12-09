// Test!

import { useState } from "react";
import Header from "./Header";
import './Rendering.css';

function Rendering() {
    const [isToggled, setIsToggled] = useState(true);

    
    return (
        <div className="rendering">
            <button classname="button-rendering" onClick={() => setIsToggled(!isToggled)}>Toggle</button>
            { isToggled && <Header />}
        </div>
        );
}

export default Rendering;
