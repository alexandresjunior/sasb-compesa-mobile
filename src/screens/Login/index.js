import React, { useContext, useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import LargeButton from '../../components/buttons/LargeButton';
import FormHeader from '../../components/headers/FormHeader';
import FormTextInput from '../../components/inputs/FormTextInput';
import { GlobalContext } from '../../contexts/GlobalContext';
import { login } from '../../services/api';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [checked, setChecked] = useState(true)
    const [loading, setLoading] = useState(false)

    const { setUsuarioLogado } = useContext(GlobalContext)

    const fazerLoginUsuario = async () => {
        setLoading(true)

        await login(email, senha, setUsuarioLogado, navigation)

        setLoading(false)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={styles.header}></View>
                    <View style={styles.form}>
                        <FormHeader text={"Não possui uma conta?"} link={"Cadastrar nova conta"} onPress={() => { navigation.navigate('Cadastro') }} />

                        <FormTextInput placeholder={"E-mail"} type={"email"} setValue={setEmail} defaultValue={email} />
                        <FormTextInput placeholder={"Senha"} setValue={setSenha} defaultValue={senha} password={true} />

                        <LargeButton label={"ENTRAR"} onPress={fazerLoginUsuario} disabled={loading} />

                        <View style={styles.row}>
                            <Checkbox
                                value={checked}
                                onValueChange={() => setChecked(!checked)}
                                color={checked ? "#223F99" : undefined}
                            />

                            <View style={styles.options}>
                                <Text style={{ marginStart: 10 }}>Mantenha-me conectado</Text>

                                <TouchableOpacity style={{}} onPress={() => { navigation.navigate("Suporte") }}>
                                    <Text style={styles.link}>Esqueci a senha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {loading && <ActivityIndicator style={{ marginVertical: 30 }} />}
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
        marginTop: -300,
        height: 250,
        backgroundColor: "#223F99"
    },
    form: {
        marginHorizontal: 25
    },
    row: {
        flexDirection: "row",
        marginTop: 10
    },
    options: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    link: {
        color: "#223F99",
        paddingStart: 5
    }
});

export default Login;