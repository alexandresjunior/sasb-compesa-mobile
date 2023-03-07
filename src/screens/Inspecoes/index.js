import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalCard from "../../components/cards/HorizontalCard";
import { inspecoes } from "../../mocks";
import Header from "../../components/Header";
import { InspecaoGlobalContext } from "../../contexts/InspecaoGlobalContext";

const Inspecoes = () => {
    const navigation = useNavigation()
    const { barragem } = useContext(InspecaoGlobalContext)

    return (
        <View>
            <Header title={barragem?.nome} />

            <TouchableOpacity
                style={estilos.button}
                onPress={() => { navigation.navigate("Nova Inspecao") }}>
                <Text style={estilos.label}>{"Nova Inspeção"}</Text>
            </TouchableOpacity>

            <FlatList
                data={inspecoes}
                renderItem={({ item }) => <HorizontalCard inspecao={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return (<>
                        <View style={estilos.container}>
                            <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
                        </View>
                    </>)
                }}
            />
        </View>

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
    button: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        marginTop: 20,
        padding: 15,
        marginHorizontal: 25
    },
    label: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    }
});