import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Cabecalho from "../Inspecoes/components/Cabecalho";
import { usuario } from "../../mocks";

// const Perfil = ({ usuario }) => {
const Perfil = () => {
    return (
        <>
            <Cabecalho nome={"Perfil"} />
            <View style={estilos.container}>
                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Nome: </Text>
                    <Text style={estilos.texto}>{usuario.nome}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Cargo: </Text>
                    <Text style={estilos.texto}>{usuario.cargo}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Instituição: </Text>
                    <Text style={estilos.texto}>{usuario.instituicao}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>E-mail: </Text>
                    <Text style={estilos.texto}>{usuario.email}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Telefone: </Text>
                    <Text style={estilos.texto}>{usuario.telefone}</Text>
                </View>
            </View>

            <View style={estilos.separador} />

            <View style={estilos.container}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.link}>Editar dados de usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.link}>Alterar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={estilos.link}>Sair</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Perfil;

const estilos = StyleSheet.create({
    container: {
        margin: 25,
    },
    row: {
        flexDirection: "row",
    },
    titulo: {
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold"
    },
    texto: {
        fontSize: 18,
    },
    link: {
        color: "#223F99",
        paddingStart: 5,
        fontSize: 18,
        marginBottom: 10,
    },
    separador: {
        marginHorizontal: 25,
        borderBottomColor: "#CACACA",
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});