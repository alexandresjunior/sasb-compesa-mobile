import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HorizontalCard from "../../components/cards/HorizontalCard";
import MidButton from "../../components/buttons/MidButton";
import Header from "../../components/Header";

const Inspecoes = ({ route, navigation }) => {
    const { barragem } = route.params;

    const relatorios = barragem.inspecao.relatorios;

    return (
        <FlatList
            data={relatorios}
            renderItem={({ item }) => <HorizontalCard inspecao={item} />}
            keyExtractor={item => item.idRelatorioInspecao}
            ListHeaderComponent={() => {
                return (<>
                    <Header title={barragem.nome} />
                    <View style={estilos.container}>
                        <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
                    </View>
                </>)
            }}
            ListFooterComponent={() => {
                return <MidButton label={"Nova Inspeção"} onPress={() => { navigation.navigate("Nova Inspecao", { barragem: barragem }) }} />
            }}
        />
    )
}

export default Inspecoes;

const estilos = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 15
    },
    tituloPreto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
});