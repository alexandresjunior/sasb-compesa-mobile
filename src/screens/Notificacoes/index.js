import React from "react";
import { FlatList, View } from "react-native";
import Header from "../../components/Header";
import NotificationCard from "../../components/NotificationCard";
import { useNotificacoes } from "../../hooks/useNotificacoes";

const Notificacoes = () => {
    const [listaDeNotificacoes, setListaDeNotificacoes] = useNotificacoes()

    const dispensarNotificacao = (id) => {
        setListaDeNotificacoes(listaDeNotificacoes.filter((notificacao) => notificacao.id !== id))
    }

    return (
        <FlatList
            data={listaDeNotificacoes}
            renderItem={({ item }) => <NotificationCard notificacao={item} onPress={() => dispensarNotificacao(item.id)} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (
                    <View style={{ marginBottom: 25 }}>
                        <Header title={"Notificações"} />
                    </View>
                )
            }}
        />
    )
}

export default Notificacoes;