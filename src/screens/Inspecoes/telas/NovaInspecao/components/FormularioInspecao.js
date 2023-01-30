import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QuestaoCard from "../../../../../components/QuestaoCard";
import { InspecaoGlobalContext } from "../../../../../contexts/InspecaoGlobalContext";
import Cabecalho from "../../../components/Cabecalho";

const FormularioInspecao = () => {
    const { paginas, paginaAtual, setPaginaAtual } = useContext(InspecaoGlobalContext);

    const [pagina] = useState(paginas[paginaAtual]);

    return (
        <ScrollView>
            <Cabecalho nome={"Nova Inspeção"} />

            <View style={estilos.container}>
                <Text style={estilos.tituloPreto}>{pagina.titulo}</Text>
                {
                    !!pagina.subtitulo && <Text style={estilos.tituloPreto}>{pagina.subtitulo}</Text>
                }

                {
                    pagina.itens.map((questao, index) => {
                        return <QuestaoCard questao={questao} key={index} />
                    })
                }

                <View style={estilos.row}>
                    <TouchableOpacity style={estilos.botaoOutline} onPress={() => setPaginaAtual(paginaAtual - 1)}>
                        <Text style={estilos.textoBotaoOutline}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao} onPress={() => setPaginaAtual(paginaAtual + 1)}>
                        <Text style={estilos.textoBotao}>Avançar</Text>
                    </TouchableOpacity>
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
    },
    botao: {
        backgroundColor: "#223F99",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 170,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    },
    botaoOutline: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 170,
    },
    textoBotaoOutline: {
        textAlign: "center",
        color: "#223F99",
        fontWeight: "bold",
        fontSize: 18
    }
});