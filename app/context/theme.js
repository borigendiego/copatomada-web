'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <ThemeContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);