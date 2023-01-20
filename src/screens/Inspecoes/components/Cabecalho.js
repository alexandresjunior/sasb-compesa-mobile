import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Cabecalho = ({ nome, showButton }) => {
    return (
        <View style={estilos.cabecalho}>
            <View style={estilos.row}>
                <Text style={estilos.tituloBranco}>{nome}</Text>
                {
                    !!showButton && (
                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name={"cloud-download-outline"} size={25} style={estilos.icone} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default Cabecalho;

const estilos = StyleSheet.create({
    cabecalho: {
        height: 150,
        backgroundColor: "#223F99",
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
    icone: {
        color: "#fff",
        verticalAlign: "middle"
    }
});