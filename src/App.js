import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { LikesProvider } from "./context/LikesContext";
import UserPanelContainer from "./components/UserPanel/UserPanelContainer";

const App = () => {
  return (
      <ThemeProvider>
        <LanguageProvider>
          <LikesProvider>
            <UserPanelContainer />
          </LikesProvider>
        </LanguageProvider>
      </ThemeProvider>
  );
};

export default App;