import React, { createContext, useEffect, useState } from "react";
import { notificacoes_mock } from "../mocks/notificacoes";

export const NotificacaoContext = createContext({});

export const NotificacaoProvider = ({ children }) => {
    const [notificacoes, setNotificacoes] = useState(notificacoes_mock)
    const [badge, setBadge] = useState({})

    const dispensarNotificacao = (id) => {
        setNotificacoes(notificacoes.filter((notificacao) => notificacao.id !== id))
    }

    useEffect(() => {
        notificacoes.length > 0 ? setBadge({ tabBarBadge: notificacoes.length }) : setBadge({})
    }, [notificacoes])

    return (
        <NotificacaoContext.Provider value={{ notificacoes, badge, dispensarNotificacao }}>
            {children}
        </NotificacaoContext.Provider>
    )
}