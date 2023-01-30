import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { formulario, respostaOpcoes } from "../mocks";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    const navigation = useNavigation();

    const [pagina, setPagina] = useState(-1);
    const [respostas, setRespostas] = useState([]);

    useEffect(() => {
        atualizarPagina();
    }, [pagina])

    const atualizarPagina = () => {
        if (pagina < 0) {
            navigation.navigate("Selecionar Barragem");
        } else if (pagina > (formulario.length - 1)) {
            navigation.navigate("Relatorio Inspecao");
        } else {
            navigation.navigate(`${formulario[pagina].codigo} - ${formulario[pagina].nome}`);
        }
    }

    return (
        <InspecaoGlobalContext.Provider value={{ formulario, respostaOpcoes, pagina, setPagina, respostas, setRespostas }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
