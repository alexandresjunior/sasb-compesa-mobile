import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const BarragemCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{item.nome}</Text>

                <View style={styles.row}>
                    <Text style={styles.text}>{item.localizacao.municipio}, {item.localizacao.estado}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.text, { fontWeight: "bold" }]}>Inspeção: </Text>
                    <Text style={styles.text}>{item.inspecao.frequencia}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.text, { fontWeight: "bold" }]}>Status: </Text>
                    <Text style={[styles.text, { fontWeight: "bold", color: item.inspecao.status === 'EM DIA' ? "#8BC63E" : "#FDCC0D" }]}>{item.inspecao.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BarragemCard;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 5,
        backgroundColor: "#FFF",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 20
    },
    row: {
        flexDirection: "row",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    text: {
        marginTop: 5,
        fontSize: 16
    }
})