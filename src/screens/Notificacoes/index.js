import React from "react";
import { FlatList } from "react-native";
import NotificationCard from "../../components/NotificationCard";
import Cabecalho from "../Inspecoes/components/Cabecalho";

const Notificacoes = () => {
    const notificacoes = [
        {
            id: 1,
            titulo: "Inspeção Pendente",
            texto: "A inspeção da barragem Bonitinho Novo ficará pendente em 10 dias. Verifique o calendário de inspeção para mais informações."
        },
        {
            id: 2,
            titulo: "Inspeção Pendente",
            texto: "A inspeção da barragem Brejinho (Pajeú) está pendente! Verifique o calendário de inspeção para mais informações."
        }
    ]

    return (
        <FlatList
            data={notificacoes}
            renderItem={({ item }) => <NotificationCard notificacao={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (<>
                    <Cabecalho nome={"Notificações"} />
                </>)
            }}
        />
    )
}

export default Notificacoes;