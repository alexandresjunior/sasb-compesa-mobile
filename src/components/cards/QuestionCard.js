import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RespostaOpcoes from "../RespostaOpcoes";
import Ionicon from "@expo/vector-icons/Ionicons";

const QuestionCard = ({ questao }) => {
    const [situacao, setSituacao] = useState(questao.resposta.respondido ? questao.resposta.situacao : "")
    const [magnitude, setMagnitude] = useState(questao.resposta.respondido ? questao.resposta.magnitude : "")
    const [nivelPerigo, setNivelPerigo] = useState(questao.resposta.respondido ? questao.resposta.nivelPerigo : "")
    const [anexos, setAnexos] = useState(questao.resposta.respondido ? questao.resposta.anexos : [])
    const [comentarios, setComentarios] = useState(questao.resposta.respondido ? questao.resposta.comentarios : [])

    const [expandir, setExpandir] = useState(false);
    const [completo, setCompleto] = useState(questao.resposta.respondido)

    useEffect(() => {
        /* Obter itens armazenados localmente, se houver! */
        // setSituacao(questao.resposta.situacao)
        // setMagnitude(questao.resposta.magnitude)
        // setNivelPerigo(questao.resposta.nivelPerigo)
        // setAnexos(questao.resposta.anexos)
        // setComentarios(questao.resposta.comentarios)

        /* Itens Obrigatórios */
        if (!completo && situacao && magnitude && nivelPerigo) {
            setCompleto(true)
        }
    }, [situacao, magnitude, nivelPerigo]);

    return (
        <View style={estilos.container}>
            <TouchableOpacity onPress={() => setExpandir(!expandir)}>
                <View style={[estilos.row, { justifyContent: "space-between" }]}>
                    <Text style={estilos.titulo}>{questao.descricao}</Text>
                    <Ionicon
                        name={completo ? "md-checkmark-circle" : "ellipse-outline"}
                        size={32}
                        color={"#223F99"}
                    />
                </View>
            </TouchableOpacity>
            {
                expandir ? (
                    <RespostaOpcoes
                        questao={questao} completo={completo}
                        situacao={situacao} setSituacao={setSituacao}
                        magnitude={magnitude} setMagnitude={setMagnitude}
                        nivelPerigo={nivelPerigo} setNivelPerigo={setNivelPerigo}
                        anexos={anexos} setAnexos={setAnexos}
                        comentarios={comentarios} setComentarios={setComentarios}
                    />
                ) : completo && (
                    <>
                        <View style={estilos.row}>
                            <Text style={[estilos.texto, { fontWeight: "bold" }]}>Situação: </Text>
                            <Text style={estilos.texto}>{situacao.significado} ({situacao.sigla})</Text>
                        </View>
                        <View style={estilos.row}>
                            <Text style={[estilos.texto, { fontWeight: "bold" }]}>Magnitude: </Text>
                            <Text style={estilos.texto}>{magnitude.opcao} ({magnitude.sigla})</Text>
                        </View>
                        <View style={estilos.row}>
                            <Text style={[estilos.texto, { fontWeight: "bold" }]}>Nível de Perigo: </Text>
                            <Text style={estilos.texto}>{nivelPerigo.opcao} ({nivelPerigo.sigla})</Text>
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default QuestionCard;

const estilos = StyleSheet.create({
    container: {
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
        flexWrap: "wrap"
    },
    texto: {
        marginTop: 5,
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        paddingEnd: 25,
        marginBottom: 20,
        maxWidth: 280
    },
})