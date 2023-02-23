import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { respostaOpcoes } from "../mocks";
import { formulario } from "../states/formulario";
import { obterPaginasDoFormulario } from "../utils";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    const navigation = useNavigation();
    const paginas = obterPaginasDoFormulario(formulario);
    const [barragem, setBarragem] = useState();
    const [paginaAtual, setPaginaAtual] = useState(-1);
    const [respostas, setRespostas] = useState([]);

    useEffect(() => {
        atualizarPagina();
    }, [paginaAtual])

    const atualizarPagina = () => {
        if (paginaAtual < 0) {
            navigation.navigate("Selecionar Barragem");
        } else if (paginaAtual > (paginas.length - 1)) {
            navigation.navigate("Relatorio Inspecao");
        } else {
            navigation.navigate(`${paginas[paginaAtual].titulo} - ${paginas[paginaAtual].subtitulo}`);
        }
    }

    return (
        <InspecaoGlobalContext.Provider value={{ barragem, setBarragem, formulario, respostaOpcoes, paginas, paginaAtual, setPaginaAtual, respostas, setRespostas }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
