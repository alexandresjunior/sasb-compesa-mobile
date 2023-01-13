import React, { createContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { questoes, respostas } from "../mocks";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    const navigation = useNavigation();

    const iniciarNovaInspecao = () => {
        navigation.navigate("A - INFRAESTRUTURA OPERACIONAL", 0)
    }

    return (
        <InspecaoGlobalContext.Provider value={{ questoes, respostas, iniciarNovaInspecao }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
