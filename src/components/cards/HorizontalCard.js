import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";
import { capitalizeFirstLetter, convertDate } from "../../utils";

const HorizontalCard = ({ inspecao }) => {
    const [isLoading, setIsLoading] = useState(false);

    const aoClicarNoLink = async () => {
        setIsLoading(true);
        try {
            const supported = await Linking.canOpenURL(inspecao.link)
            if (supported) {
                await Linking.openURL(inspecao.link)
            } else {
                alert("Não foi possível acessar o documento. Verifique sua conexão e tente novamente mais tarde.");
            }
        } catch (error) {
            alert("O link para acessar este documento não está disponível no momento. Tente novamente mais tarde.")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <TouchableOpacity onPress={aoClicarNoLink}>
            <View style={estilos.container}>
                <Text style={estilos.title}>Data: {convertDate(inspecao.data)}</Text>

                <View style={estilos.row}>
                    <Text style={[estilos.text, { fontWeight: "bold" }]}>Tipo: </Text>
                    <Text style={estilos.text}>{capitalizeFirstLetter(inspecao.tipo)}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.text, { fontWeight: "bold" }]}>Inspetor(a): </Text>
                    <Text style={estilos.text}>{inspecao.inspetor}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.text, { fontWeight: "bold" }]}>Responsável Técnico: </Text>
                    <Text style={estilos.text}>{inspecao.responsavel}</Text>
                </View>
                <View style={estilos.row}>
                    <Text style={[estilos.text, { fontWeight: "bold" }]}>Status: </Text>
                    <Text style={[estilos.text, { fontWeight: "bold", color: inspecao.status === 'ENTREGUE' ? "#8BC63E" : "#FDCC0D" }]}>{inspecao.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalCard;

const estilos = StyleSheet.create({
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
        fontSize: 18,
        fontWeight: "bold"
    },
    text: {
        marginTop: 5,
    }
})