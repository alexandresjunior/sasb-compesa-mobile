import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalCard from "../../components/cards/HorizontalCard";
import { inspecoes } from "../../mocks";
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
            />
            <View style={[estilos.container, { position: "absolute", bottom: 0, right: 0 }]}>
                <TouchableOpacity style={estilos.button} onPress={() => { navigation.navigate("Nova Inspecao") }}>
                    <Text style={estilos.label}>{"Nova Inspeção"}</Text>
                </TouchableOpacity>
            </View>
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tituloPreto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    button: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: "100%",
        padding: 15,
        alignSelf: "center",
        marginBottom: 10
    },
    label: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    }
});