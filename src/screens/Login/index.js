import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/sasb_compesa_logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [checked, setChecked] = useState(false);

    const { signIn } = useAuth();

    return (
        <>
            <View style={estilos.cabecalho}></View>

            <View style={estilos.container}>
                <Image source={logo} style={estilos.imagem} />

                <View>
                    <Text style={estilos.titulo}>Bem-vindo!</Text>
                    <View style={estilos.containerRow}>
                        <Text>Não possui uma conta?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }}>
                            <Text style={estilos.link}>Cadastrar nova conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TextInput
                    style={estilos.input}
                    placeholder="E-mail"
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

                <TouchableOpacity
                    style={estilos.botao}
                    onPress={() => { signIn({ email, senha }) }}>
                    <Text style={estilos.textoBotao}>ENTRAR</Text>
                </TouchableOpacity>

                <View style={estilos.containerRow}>
                    <Checkbox
                        value={checked}
                        onValueChange={() => setChecked(!checked)}
                        color={true ? "#223F99" : undefined}
                    />

                    <View style={estilos.opcoes}>
                        <Text style={{ marginStart: 10 }}>Mantenha-me conectado</Text>

                        <TouchableOpacity style={{}} onPress={() => { }}>
                            <Text style={estilos.link}>Esqueci a senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Login;

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
        backgroundColor: "white"
    },
    link: {
        color: "#223F99",
        paddingStart: 5
    },
    botao: {
        backgroundColor: "#223F99",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#223F99",
        width: "100%",
        marginTop: 20,
        padding: 15,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
    opcoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
