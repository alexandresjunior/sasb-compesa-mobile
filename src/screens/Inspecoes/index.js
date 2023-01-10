import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HorizontalCard from "../../components/HorizontalCard";
import { inspecoes } from "../../mocks/inspecoes";

const Inspecoes = () => {
    console.log(inspecoes)
    return (
        <FlatList
            style={estilos.lista}
            data={inspecoes}
            renderItem={({ item }) => <HorizontalCard inspecao={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (
                    <>
                        <View style={estilos.cabecalho}>
                            <View style={estilos.containerRow}>
                                <Text style={estilos.tituloBranco}>Barragem Jaime Nejaim</Text>
                            </View>
                        </View>

                        <View style={estilos.container}>
                            <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
                        </View>
                    </>
                )
            }}
        />
    )
}

export default Inspecoes;

const estilos = StyleSheet.create({
    cabecalho: {
        height: 150,
        backgroundColor: "#223F99",
    },
    container: {
        margin: 25
    },
    containerRow: {
        flexDirection: "row",
        marginTop: 100,
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    tituloBranco: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: 5
    },
    tituloPreto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    input: {
        margin: 25,
        height: 50,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        color: "#CACACA",
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        backgroundColor: "white",
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 15
    },
    lista: {
    }
})