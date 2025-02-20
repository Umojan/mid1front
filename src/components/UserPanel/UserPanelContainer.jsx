import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { useLikes } from "../../hooks/useLikes";
import UserPanel from "./UserPanel";
import en from "../../translations/en.json";
import ru from "../../translations/ru.json";

const UserPanelContainer = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, switchLanguage } = useLanguage();
    const { likes, incrementLikes } = useLikes();

    const translations = language === "en" ? en : ru;

    return (
        <div className={theme === "dark" ? "dark-theme" : ""}>
            <div className="user-panel">
                <h1>{translations.greeting}</h1>
                <p>{translations.likes}: <b>{likes}</b></p>
                <button onClick={incrementLikes}>
                    {likes > 0 ? translations.liked_button : translations.like_button}
                </button>
                <button onClick={toggleTheme}>{translations.toggle_theme}</button>
                <button onClick={switchLanguage}>{translations.switch_language}</button>
            </div>
        </div>
    );
};

export default UserPanelContainer;