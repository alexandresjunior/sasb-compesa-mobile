import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InspecaoGlobalContext } from "../../../contexts/InspecaoGlobalContext";
import Header from "../../../components/Header";
import QuestionCard from "../../../components/cards/QuestionCard";
import SmallButton from "../../../components/buttons/SmallButton";
import SmallButtonOutline from "../../../components/buttons/SmallButtonOutline";

const FormularioInspecao = () => {
    const { paginas, paginaAtual, setPaginaAtual } = useContext(InspecaoGlobalContext);

    const [pagina] = useState(paginas[paginaAtual]);

    return (
        <ScrollView>
            <Header title={"Nova Inspeção"} />

            <View style={estilos.container}>
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
                    <SmallButtonOutline label={"Voltar"} onPress={() => setPaginaAtual(paginaAtual - 1)} />
                    <SmallButton label={"Avançar"} onPress={() => setPaginaAtual(paginaAtual + 1)} />
                </View>
            </View>
        </ScrollView>
    )
}

export default FormularioInspecao;

const estilos = StyleSheet.create({
    container: {
        margin: 25
    },
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