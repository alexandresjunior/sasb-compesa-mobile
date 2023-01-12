import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalCard from "../../components/HorizontalCard";
import { inspecoes } from "../../mocks/inspecoes";

const Inspecoes = () => {
    return (
        <FlatList
            data={inspecoes}
            renderItem={({ item }) => <HorizontalCard inspecao={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (
                    <>
                        <View style={estilos.cabecalho}>
                            <View style={estilos.row}>
                                <Text style={estilos.tituloBranco}>Barragem Jaime Nejaim</Text>
                            </View>
                        </View>

                        <View style={estilos.container}>
                            <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
                        </View>
                    </>
                )
            }}
            ListFooterComponent={() => {
                return (
                    <View style={estilos.container}>
                        <TouchableOpacity
                            style={estilos.botao}
                            onPress={() => { }}>
                            <Text style={estilos.textoBotao}>Nova Inspeção</Text>
                        </TouchableOpacity>
                    </View>
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
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 15
    },
    row: {
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
    botao: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 200,
        padding: 15,
        alignSelf: "center",
        marginBottom: 10
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
})