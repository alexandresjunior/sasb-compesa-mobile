import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import LargeButton from "../../components/buttons/LargeButton";
import FormHeader from "../../components/headers/FormHeader";
import FormTextInput from "../../components/inputs/FormTextInput";
import { cadastrar } from "../../services/api";

const Cadastro = () => {
    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

    const cadastrarUsuario = async () => {
        if (!nome) {
            alert('O campo nome é obrigatório!')
            return
        }

        if (senha !== senhaConfirmacao) {
            alert('As senhas não batem! Tente novamente.')
            return
        }

        await cadastrar(nome, email, senha, navigation)
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            pagingEnabled
        >
            <View style={estilos.cabecalho}></View>

            <View style={estilos.container}>
                <FormHeader text={"Já possui uma conta?"} link={"Acessar minha conta"} onPress={() => { navigation.navigate('Log In') }} />

                <FormTextInput placeholder={"Nome"} setValue={setNome} defaultValue={nome} />
                <FormTextInput placeholder={"E-mail"} type={"email"} setValue={setEmail} defaultValue={email} />
                <FormTextInput placeholder={"Senha"} setValue={setSenha} defaultValue={senha} password={true} />
                <FormTextInput placeholder={"Confirmar Senha"} setValue={setSenhaConfirmacao} defaultValue={senhaConfirmacao} password={true} />

                <LargeButton label={"CADASTRAR"} onPress={cadastrarUsuario} />
            </View>
        </ScrollView>
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
