import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { questoes, respostas } from "../mocks";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    const navigation = useNavigation();

    const [pagina, setPagina] = useState(-1);

    useEffect(() => {
        atualizarPagina();
    }, [pagina])

    const atualizarPagina = () => {
        if (pagina < 0) {
            navigation.navigate("Selecionar Barragem");
        } else if (pagina > (questoes.length - 1)) {
            navigation.navigate("Relatorio Inspecao");
        } else {
            navigation.navigate(`${questoes[pagina].codigo} - ${questoes[pagina].nome}`);
        }
    }

    return (
        <InspecaoGlobalContext.Provider value={{ questoes, respostas, pagina, setPagina }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
