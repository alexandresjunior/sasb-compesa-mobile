import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import LegendaModal from "../../../../components/LegendaModal";
import { respostas } from "../../../../mocks";

const InputSection = ({titulo, legenda, opcoes, answer, setAnswer, modalVisible, setModalVisible}) => {
    return (
        <>
            <View style={estilos.tooltip}>
                <Text style={estilos.titulo}>{titulo}</Text>
                <TouchableOpacity style={estilos.icone} onPress={() => setModalVisible(true)}>
                    <MaterialIcons name="info-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <LegendaModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                item={legenda}
            />

            <View style={estilos.row}>
                {
                    opcoes?.map((opcao, index) => {
                        return (
                            <TouchableOpacity style={[
                                estilos.botao,
                                answer === opcao && estilos.botaoSelecionado
                            ]}
                                onPress={() => setAnswer(opcao)}
                                key={index}>
                                <Text style={answer === opcao ? estilos.textoBotaoSelecionado : estilos.textoBotao}>
                                    {opcao.sigla}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </>
    )
}

export default InputSection;

const estilos = StyleSheet.create({
    tooltip: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icone: {
        paddingEnd: 5
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
        marginBottom: 20
    },
    titulo: {
        marginBottom: 20,
        fontSize: 18,
        fontWeight: "bold"
    },
    botao: {
        borderWidth: 1,
        borderColor: "#223F99",
        borderRadius: 5,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    botaoSelecionado: {
        backgroundColor: "#223F99",
    },
    textoBotao: {
        color: "#223F99",
        fontSize: 16
    },
    textoBotaoSelecionado: {
        color: "#fff",
        fontSize: 16
    }
});