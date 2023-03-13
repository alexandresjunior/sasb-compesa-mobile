import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { respostaOpcoes } from "../mocks";
import { FORMULARIO_VAZIO } from "../states/formulario";

export const InspecaoGlobalContext = createContext({})

export const InspecaoProvider = ({ children }) => {
    // Seleção da barragem a fazer a inspeção

    const [barragem, setBarragem] = useState()
    const [formulario, setFormulario] = useState(FORMULARIO_VAZIO)

    // Paginação do formulário de inspeção

    const navigation = useNavigation()

    const [paginaAtual, setPaginaAtual] = useState(0)

    const avancar = (paginaAtual, pagina, paginas) => {
        if (podeAvancar(pagina)) {
            if (paginaAtual > (paginas.length - 1)) {
                navigation.navigate("Relatorio Inspecao")
            } else {
                setPaginaAtual(paginaAtual + 1)
            }
        } else {
            alert("Há itens sem resposta. Assinale os itens obrigatórios antes de continuar.")
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
                formulario, setFormulario,
                respostaOpcoes,
                paginaAtual, setPaginaAtual,
                avancar, voltar,
                respostas, setRespostas
            }
        }>
            {children}
        </InspecaoGlobalContext.Provider>
    )
}

const podeAvancar = (pagina) => {
    let numItens = 0

    if (pagina === -1) {
        return true
    }

    pagina?.itens.map((questao) => {
        if (questao.resposta.respondido) {
            numItens++
        }
    })

    return numItens === pagina?.itens.length
}
