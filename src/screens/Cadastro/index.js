import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/sasb_compesa_logo.png";

const Cadastro = () => {
    const navigation = useNavigation();

    const [matricula, setMatricula] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

    return (
        <>
            <View style={estilos.cabecalho}></View>

            <View style={estilos.container}>
                <Image source={logo} style={estilos.imagem} />

                <View>
                    <Text style={estilos.titulo}>Bem-vindo!</Text>
                    <View style={estilos.containerRow}>
                        <Text>Já possui uma conta?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Log In') }}>
                            <Text style={estilos.link}>Acessar minha conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TextInput
                    style={estilos.input}
                    placeholder="Matrícula"
                    keyboardType="numeric"
                    onChangeText={(matricula) => {
                        setMatricula(matricula)
                    }}
                    defaultValue={matricula}
                />

                <TextInput
                    style={estilos.input}
                    placeholder="Email"
                    keyboardType="email"
                    onChangeText={(email) => {
                        setEmail(email)
                    }}
                    defaultValue={email}
                />

                <TextInput
                    style={estilos.input}
                    placeholder="Senha"
                    keyboardType="password"
                    onChangeText={(senha) => {
                        setSenha(senha)
                    }}
                    defaultValue={senha}
                />

                <TextInput
                    style={estilos.input}
                    placeholder="Confirmar Senha"
                    keyboardType="password"
                    onChangeText={(senhaConfirmacao) => {
                        setSenhaConfirmacao(senhaConfirmacao)
                    }}
                    defaultValue={senhaConfirmacao}
                />

                <TouchableOpacity
                    style={estilos.botao}
                    onPress={() => { navigation.navigate('Tab Rotas') }}>
                    <Text style={estilos.textoBotao}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Cadastro;

const estilos = StyleSheet.create({
    cabecalho: {
        height: 200,
        backgroundColor: "#223F99"
    },
    container: {
        margin: 25
    },
    containerRow: {
        flexDirection: "row",
        marginTop: 10
    },
    imagem: {
        marginTop: 15,
        marginBottom: 35,
        width: 288,
        height: 54,
        alignSelf: 'center'
    },
    titulo: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 10,

    },
    link: {
        color: "#223F99",
        paddingStart: 5
    },
    botao: {
        backgroundColor: "#223F99",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: "100%",
        marginTop: 35,
        padding: 15,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    }
})
