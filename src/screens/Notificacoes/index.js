import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import Header from "../../components/Header";
import NotificationCard from "../../components/NotificationCard";
import { NotificacaoContext } from "../../contexts/NotificacaoContext";

const Notificacoes = () => {
    const { notificacoes, dispensarNotificacao } = useContext(NotificacaoContext)

    return (
        <FlatList
            data={notificacoes}
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