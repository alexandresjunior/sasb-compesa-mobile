import React, { createContext, useEffect, useState } from "react";
import { notificacoes_mock } from "../mocks/notificacoes";

export const NotificacaoContext = createContext({});

export const NotificacaoProvider = ({ children }) => {
    const [notificacoes, setNotificacoes] = useState(notificacoes_mock)
    const [badge, setBadge] = useState({})

    const adicionarNotificacao = () => {
        setNotificacoes([...notificacoes, {
            id: (notificacoes?.length > 0) ? (notificacoes.length + 1) : 1,
            titulo: "INSPEÇÃO PENDENTE DE ENVIO",
            texto: "Sua última inspeção foi realizada mas não foi enviada. Clique aqui para gerar o relatório.",
            acao: "Enviar relatório (TO BE DONE)"
        }])
    }

    const dispensarNotificacao = (id) => {
        setNotificacoes(notificacoes.filter((notificacao) => notificacao.id !== id))
    }

    useEffect(() => {
        notificacoes.length > 0 ? setBadge({ tabBarBadge: notificacoes.length }) : setBadge({})
    }, [notificacoes])

    return (
        <NotificacaoContext.Provider value={{ notificacoes, badge, adicionarNotificacao, dispensarNotificacao }}>
            {children}
        </NotificacaoContext.Provider>
    )
}