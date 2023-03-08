import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import LargeButton from '../../components/buttons/LargeButton';
import FormHeader from '../../components/headers/FormHeader';
import FormTextInput from '../../components/inputs/FormTextInput';
import { cadastrar } from '../../services/api';

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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={styles.header}></View>
                    <View style={styles.form}>
                        <FormHeader text={"Já possui uma conta?"} link={"Acessar minha conta"} onPress={() => { navigation.navigate('Log In') }} />

                        <FormTextInput placeholder={"Nome"} setValue={setNome} defaultValue={nome} />
                        <FormTextInput placeholder={"E-mail"} type={"email"} setValue={setEmail} defaultValue={email} />
                        <FormTextInput placeholder={"Senha"} setValue={setSenha} defaultValue={senha} password={true} />
                        <FormTextInput placeholder={"Confirmar Senha"} setValue={setSenhaConfirmacao} defaultValue={senhaConfirmacao} password={true} />

                        <LargeButton label={"CADASTRAR"} onPress={cadastrarUsuario} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        marginTop: -200,
        height: 250,
        backgroundColor: "#223F99"
    },
    form: {
        marginHorizontal: 25
    },
});

export default Cadastro;