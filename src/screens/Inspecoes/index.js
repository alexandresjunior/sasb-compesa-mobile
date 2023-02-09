import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HorizontalCard from "../../components/cards/HorizontalCard";
import { inspecoes } from "../../mocks";
import MidButton from "../../components/buttons/MidButton";
import Header from "../../components/Header";

const Inspecoes = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={inspecoes}
            renderItem={({ item }) => <HorizontalCard inspecao={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (<>
                    <Header title={"Barragem Jaime Nejaim"} />
                    <View style={estilos.container}>
                        <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
                    </View>
                </>)
            }}
            ListFooterComponent={() => {
                return <MidButton label={"Nova Inspeção"} onPress={() => { navigation.navigate("Nova Inspecao") }} />
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