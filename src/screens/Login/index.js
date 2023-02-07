import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/sasb_compesa_logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useAuth } from "../../hooks/useAuth";
import { login } from "../../services/api";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [checked, setChecked] = useState(true);

    const { usuarioLogado, setUsuarioLogado } = useContext(GlobalContext);

    const fazerLoginUsuario = async () => {
        await login(email, senha, setUsuarioLogado)
    }

    useEffect(() => {
        if (usuarioLogado) {
            navigation.navigate("Tab Rotas")
        }
    }, [usuarioLogado])

    return (
        <>
            <View style={estilos.cabecalho}></View>

            <View style={estilos.container}>
                <FormHeader text={"Não possui uma conta?"} link={"Cadastrar nova conta"} onPress={() => { navigation.navigate('Cadastro') }} />

                <FormTextInput placeholder={"E-mail"} type={"email"} setValue={setEmail} defaultValue={email} />
                <FormTextInput placeholder={"Senha"} type={"password"} setValue={setSenha} defaultValue={senha} />

                <LargeButton label={"ENTRAR"} onPress={() => navigation.navigate("Tab Rotas")} />

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
                    onPress={fazerLoginUsuario}>
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

                        <TouchableOpacity style={{}} onPress={() => { navigation.navigate("Suporte") }}>
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
    row: {
        flexDirection: "row",
        marginTop: 10
    },
    opcoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    link: {
        color: "#223F99",
        paddingStart: 5
    }
})
