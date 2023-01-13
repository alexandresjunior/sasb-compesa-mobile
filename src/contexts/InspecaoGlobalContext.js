import React, { createContext } from "react";
import { questoes, respostas } from "../mocks";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    return (
        <InspecaoGlobalContext.Provider value={{ questoes, respostas }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
