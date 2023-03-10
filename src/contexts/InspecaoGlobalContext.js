import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { respostaOpcoes } from "../mocks";
import { formulario } from "../states/formulario";
import { obterPaginasDoFormulario } from "../utils";

export const InspecaoGlobalContext = createContext({});

export const InspecaoProvider = ({ children }) => {
    // Seleção da barragem a fazer a inspeção

    const [barragem, setBarragem] = useState()

    // Paginação do formulário de inspeção

    const navigation = useNavigation()

    const paginas = obterPaginasDoFormulario(formulario)

    const [paginaAtual, setPaginaAtual] = useState(0)

    const avancar = (paginaAtual) => {
        if (paginaAtual > (paginas.length - 1)) {
            navigation.navigate("Relatorio Inspecao")
        } else {
            setPaginaAtual(paginaAtual + 1)
        }
    }

    const voltar = (paginaAtual) => {
        if (paginaAtual < 0) {
            navigation.navigate("Selecionar Barragem")
        } else {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    // ???

    const [respostas, setRespostas] = useState([])

    return (
        <InspecaoGlobalContext.Provider value={
            {
                barragem, setBarragem,
                formulario,
                respostaOpcoes,
                paginas,
                paginaAtual, setPaginaAtual,
                avancar, voltar,
                respostas, setRespostas
            }
        }>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}
