import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { respostaOpcoes } from "../mocks";
import { formulario } from "../states/formulario";
import { obterPaginasDoFormulario } from "../utils";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    const navigation = useNavigation()

    const paginas = obterPaginasDoFormulario(formulario)

    const [barragem, setBarragem] = useState()
    const [paginaAtual, setPaginaAtual] = useState(0)
    const [respostas, setRespostas] = useState([])

    const proximaPagina = () => {
        if (paginaAtual > (paginas.length - 1)) {
            navigation.navigate("Relatorio Inspecao")
        } else {
            setPaginaAtual(paginaAtual + 1)
        }
    }

    const paginaAnterior = () => {
        if (paginaAtual < 0) {
            navigation.navigate("Selecionar Barragem")
        } else {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    return (
        <InspecaoGlobalContext.Provider value={{ barragem, setBarragem, formulario, respostaOpcoes, paginas, paginaAtual, setPaginaAtual, proximaPagina, paginaAnterior, respostas, setRespostas }}>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
