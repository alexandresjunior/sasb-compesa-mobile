import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import NotificationCard from "../../components/NotificationCard";
import { NotificacaoContext } from "../../contexts/NotificacaoContext";

const Notificacoes = () => {
    const { notificacoes, dispensarNotificacao } = useContext(NotificacaoContext)

    return (
        <>
            <View style={{ marginBottom: 25 }}>
                <Header title={"Notificações"} />
            </View>
            {
                notificacoes?.length > 0 ? (
                    <FlatList
                        data={notificacoes}
                        renderItem={({ item }) => <NotificationCard notificacao={item} onPress={() => dispensarNotificacao(item.id)} />}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <View style={{ marginBottom: 25 }}>
                        <Header title={"Notificações"} />
                        <View style={estilos.container}>
                            <Text style={estilos.texto}>Não há notificações no momento.</Text>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default Notificacoes;

const estilos = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 15
    },
    texto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
});