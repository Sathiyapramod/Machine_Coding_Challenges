import React from "react";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import Toggler from "./components/Toggler";

function App(): React.ReactNode {
    return (
        <ThemeProvider>
            <Toggler />
        </ThemeProvider>
    );
}

export default App;
