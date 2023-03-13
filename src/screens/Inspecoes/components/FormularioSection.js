import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SmallButton from "../../../components/buttons/SmallButton";
import SmallButtonOutline from "../../../components/buttons/SmallButtonOutline";
import QuestionCard from "../../../components/cards/QuestionCard";

const FormularioSection = ({ pagina, prevPage, nextPage }) => {
    return (
        <>
            <Text style={estilos.tituloPreto}>{pagina.titulo}</Text>
            {
                !!pagina.subtitulo && <Text style={estilos.tituloPreto}>{pagina.subtitulo}</Text>
            }

            {
                pagina.itens.map((questao, index) => {
                    // Gera uma única key para o card
                    const key = `${pagina.id}.${index}`

                    return <QuestionCard questao={questao} key={key} />
                })
            }

            <View style={estilos.row}>
                <SmallButtonOutline label={"Voltar"} onPress={prevPage} />
                <SmallButton label={"Avançar"} onPress={nextPage} />
            </View>
        </>
    )
}

export default FormularioSection;

const estilos = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    tituloPreto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 15
    }
});