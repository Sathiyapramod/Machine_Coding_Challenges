import { useContext } from "react";
import { ThemeContextType, ThemeContext } from "../context/ThemeContext";

export const useTheme = (): ThemeContextType => {
    // step 3:
    //creating custom hook to use the current context
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
