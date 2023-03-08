import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HorizontalCard from "../../components/cards/HorizontalCard";
import { inspecoes } from "../../mocks";
import MidButton from "../../components/buttons/MidButton";
import Header from "../../components/Header";
import { InspecaoGlobalContext } from "../../contexts/InspecaoGlobalContext";
import { useNavigation } from "@react-navigation/native";

const Inspecoes = () => {
    const navigation = useNavigation()

    const { barragem } = useContext(InspecaoGlobalContext)

    return (
        <>
            <Header title={barragem?.nome} />
            <View style={estilos.container}>
                <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
            </View>
            <FlatList
                data={inspecoes}
                renderItem={({ item }) => <HorizontalCard inspecao={item} />}
                keyExtractor={item => item.id}
                ListFooterComponent={() => {
                    return <MidButton label={"Nova Inspeção"} onPress={() => { navigation.navigate("Nova Inspecao") }} />
                }}
            />
        </>
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