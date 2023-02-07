import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FormButton from "../../components/buttons/FormButton";
import FormHeader from "../../components/headers/FormHeader";
import FormTextInput from "../../components/inputs/FormTextInput";

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
                <FormHeader text={"Já possui uma conta?"} link={"Acessar minha conta"} onPress={() => { navigation.navigate('Log In') }} />

                <FormTextInput placeholder={"Matrícula"} type={"numeric"} setValue={setMatricula} defaultValue={matricula} />
                <FormTextInput placeholder={"E-mail"} type={"email"} setValue={setEmail} defaultValue={email} />
                <FormTextInput placeholder={"Senha"} type={"password"} setValue={setSenha} defaultValue={senha} />
                <FormTextInput placeholder={"Confirmar Senha"} type={"password"} setValue={setSenhaConfirmacao} defaultValue={senhaConfirmacao} />

                <FormButton text={"CADASTRAR"} onPress={() => navigation.navigate("Tab Rotas")} />
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
})
