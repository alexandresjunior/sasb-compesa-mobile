import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import icon from "../../../assets/usuario_icon.png";
import { GlobalContext } from "../../contexts/GlobalContext";

const Home = () => {
    const { usuarioLogado, networkConnected } = useContext(GlobalContext)

    useEffect(() => {
        if (!networkConnected) {
            alert("Dispositivo sem conexão de rede. Algumas funcionalidades são limitadas no modo offline.")
        }
    }, [])

    return (
        <>
            <View style={styles.header}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>Bem vindo,</Text>
                        <Text style={styles.username}>{`${usuarioLogado?.nome}!`}</Text>
                    </View>

                    <Image source={icon} style={styles.image} />
                </View>
            </View>

            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
            >
                <Text style={styles.texto}>
                    Este aplicativo tem como objetivo a realização de inspeções de barragens do estado de Pernambuco sob a responsabilidade da COMPESA.
                </Text>
                <Text style={styles.texto}>
                    Para isso, você deverá seguir os passos abaixo:
                </Text>
                <View style={styles.instruction}>
                    <Text style={styles.label}>
                        1.
                    </Text>
                    <Text style={styles.texto}>
                        Na aba "Inspeções", selecione a barragem que você deseja realizar a inspeção.
                    </Text>
                </View>
                <View style={styles.instruction}>
                    <Text style={styles.label}>
                        2.
                    </Text>
                    <Text style={styles.texto}>
                        Verifique o histórico de inspeções já realizadas e clique em "Nova Inspeção".
                    </Text>
                </View>
                <View style={styles.instruction}>
                    <Text style={styles.label}>
                        3.
                    </Text>
                    <Text style={styles.texto}>
                        Confirme os seus dados e os dados da barragem selecionada clicando no botão "Confirmar Dados".
                    </Text>
                </View>
                <View style={styles.instruction}>
                    <Text style={styles.label}>
                        4.
                    </Text>
                    <Text style={styles.texto}>
                        Preencha o formulário com a situação, magnitude e nível de perigo das anomalias observadas e anexe imagens, caso necessário.
                    </Text>
                </View>
                <View style={styles.instruction}>
                    <Text style={styles.label}>
                        5.
                    </Text>
                    <Text style={styles.texto}>
                        Ao término da inspeção, clique em "Compartilhar Relatório". Aguarde alguns instantes e um arquivo PDF estará disponível para envio por e-mail diretamente de seu dispositivo.
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    header: {
        height: 150,
        backgroundColor: "#223F99",
    },
    container: {
        margin: 25,
    },
    row: {
        flexDirection: "row",
        marginTop: 80,
        justifyContent: "space-between",
        marginHorizontal: 25,
        flexWrap: "wrap",
    },
    title: {
        fontSize: 14,
        color: "white",
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 5
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 25
    },
    instruction: {
        flexDirection: "row",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginEnd: 5
    },
    texto: {
        fontSize: 18,
        marginBottom: 14,
        width: "92.5%",
    },
})