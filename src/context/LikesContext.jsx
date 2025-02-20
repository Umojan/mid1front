import { createContext, useState } from "react";

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
    const [likes, setLikes] = useState(0);

    const incrementLikes = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    return (
        <LikesContext.Provider value={{ likes, incrementLikes }}>
            {children}
        </LikesContext.Provider>
    );
};