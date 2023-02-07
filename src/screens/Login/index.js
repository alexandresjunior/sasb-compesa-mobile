import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormButton from "../../components/buttons/FormButton";
import FormHeader from "../../components/headers/FormHeader";
import FormTextInput from "../../components/inputs/FormTextInput";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [checked, setChecked] = useState(true);

    return (
        <>
            <View style={estilos.cabecalho}></View>

            <View style={estilos.container}>
                <FormHeader text={"Não possui uma conta?"} link={"Cadastrar nova conta"} onPress={() => { navigation.navigate('Cadastro') }} />

                <FormTextInput placeholder={"E-mail"} type={"email"} setValue={setEmail} defaultValue={email} />
                <FormTextInput placeholder={"Senha"} type={"password"} setValue={setSenha} defaultValue={senha} />

                <FormButton text={"ENTRAR"} onPress={() => navigation.navigate("Tab Rotas")} />

                <View style={estilos.row}>
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
