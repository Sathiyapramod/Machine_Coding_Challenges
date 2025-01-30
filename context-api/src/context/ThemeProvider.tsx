import React, { ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeInterface {
    children: ReactNode;
}

function ThemeProvider({ children }: ThemeInterface): React.ReactNode {
    const [theme, setTheme] = useState<boolean>(false);

    const handleToggle = () => setTheme((pv) => !pv);

    // step 2
    // wrapping up above the child level with context provider
    return (
        <ThemeContext.Provider value={{ theme, handleToggle }}>{children}</ThemeContext.Provider>
    );
}

export default ThemeProvider;
