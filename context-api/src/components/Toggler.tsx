import React from "react";
import { useTheme } from "../hooks/useTheme";

function Toggler(): React.ReactNode {
    const { theme, handleToggle } = useTheme();

    const buttonStyle = {
        color: theme === true ? "black" : "white",
        background: theme === true ? "white" : "black",
    };

    return (
        <button onClick={handleToggle} style={buttonStyle}>
            {theme === true ? "Light" : "Dark"}
        </button>
    );
}

export default Toggler;
