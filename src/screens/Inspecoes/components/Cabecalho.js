import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cabecalho = ({ nome }) => {
    return (
        <>
            <View style={estilos.cabecalho}>
                <View style={estilos.row}>
                    <Text style={estilos.tituloBranco}>{nome}</Text>
                </View>
            </View>

            <View style={estilos.container}>
                <Text style={estilos.tituloPreto}>Inspeções Realizadas</Text>
            </View>
        </>
    )
}

export default Cabecalho;

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
});