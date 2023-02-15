import { useState } from "react"
import { notificacoes } from "../mocks/notificacoes"

export const useNotificacoes = () => {
    const [listaDeNotificacoes, setListaDeNotificacoes] = useState(notificacoes)

    // TODO: Obter notificações da API

    return [listaDeNotificacoes, setListaDeNotificacoes]
}