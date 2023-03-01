import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../../services/local";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const Perfil = () => {
    const navigation = useNavigation()

    const { usuarioLogado } = useContext(GlobalContext)

    return (
        <>
            <Header title={"Perfil"} />
            <View style={estilos.container}>
                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Nome: </Text>
                    <Text style={estilos.texto}>{usuarioLogado.nome}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Cargo: </Text>
                    <Text style={estilos.texto}>{usuarioLogado.cargo}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Matrícula: </Text>
                    <Text style={estilos.texto}>{usuarioLogado.matricula}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>E-mail: </Text>
                    <Text style={estilos.texto}>{usuarioLogado.email}</Text>
                </View>

                <View style={[estilos.row, estilos.titulo]}>
                    <Text style={estilos.label}>Telefone: </Text>
                    <Text style={estilos.texto}>{usuarioLogado.telefone}</Text>
                </View>
            </View>

            <View style={estilos.separador} />

            <View style={estilos.container}>
                <TouchableOpacity onPress={() => { navigation.navigate("Suporte") }}>
                    <Text style={estilos.link}>Editar dados de usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("Suporte") }}>
                    <Text style={estilos.link}>Alterar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    logout()
                    navigation.navigate("Log In")
                }}>
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