import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
    const [flashcards, setFlashcards] = useState([]);
    const [subjects, setSubjects] = useState([]);

    return (
        <FlashcardContext.Provider value={{ flashcards, setFlashcards, subjects, setSubjects }}>
            {children}
        </FlashcardContext.Provider>
    );
};

export const useFlashcard = () => useContext(FlashcardContext);