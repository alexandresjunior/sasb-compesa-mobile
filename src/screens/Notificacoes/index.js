import React from "react";
import { FlatList, View } from "react-native";
import Header from "../../components/Header";
import NotificationCard from "../../components/NotificationCard";
import { notificacoes } from "../../mocks/notificacoes";

const Notificacoes = () => {
    return (
        <FlatList
            data={notificacoes}
            renderItem={({ item }) => <NotificationCard notificacao={item} />}
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