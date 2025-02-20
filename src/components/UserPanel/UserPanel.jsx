import React from "react";

const UserPanel = ({ greeting, likes, likeText, onLike, onToggleTheme, onSwitchLanguage }) => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>{greeting}</h1>
            <p>{likes}: <b>{likes}</b></p>
            <button onClick={onLike}>{likeText}</button>
            <button onClick={onToggleTheme}>Toggle Theme</button>
            <button onClick={onSwitchLanguage}>Switch Language</button>
        </div>
    );
};

export default UserPanel;