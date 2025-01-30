import { createContext } from "react";

//step 1
// creating a context using createContext

export interface ThemeContextType {
    theme: boolean;
    handleToggle: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
