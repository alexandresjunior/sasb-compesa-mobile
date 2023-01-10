import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/compesa_favicon.png";

const TelaInicial = () => {
    return (
        <View>
            <Image source={logo} style={estilos.imagem} />

            <View style={estilos.botoes}>
                <TouchableOpacity style={estilos.botaoLogIn} onPress={() => { }}>
                    <Text style={estilos.textoBotaoLogIn}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoSignUp} onPress={() => { }}>
                    <Text style={estilos.textoBotaoSignUp}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TelaInicial;

const estilos = StyleSheet.create({
    imagem: {
        marginTop: 150,
        width: 200,
        height: 200,
    },
    botoes: {
        marginTop: 100,
        alignSelf: "center",
    },
    botaoLogIn: {
        backgroundColor: "#223F99",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 170,
        marginBottom: 20,
    },
    textoBotaoLogIn: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18
    },
    botaoSignUp: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: 170,
    },
    textoBotaoSignUp: {
        textAlign: "center",
        color: "#223F99",
        fontWeight: "bold",
        fontSize: 18
    }
})