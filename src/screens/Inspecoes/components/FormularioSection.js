import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SmallButton from "../../../components/buttons/SmallButton";
import SmallButtonOutline from "../../../components/buttons/SmallButtonOutline";

const FormularioSection = ({pagina, prevPage, nextPage}) => {
    return (
        <>
            <Text style={estilos.tituloPreto}>{pagina.titulo}</Text>
            {
                !!pagina.subtitulo && <Text style={estilos.tituloPreto}>{pagina.subtitulo}</Text>
            }

            {
                pagina.itens.map((questao, index) => {
                    return <QuestionCard questao={questao} key={index} />
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