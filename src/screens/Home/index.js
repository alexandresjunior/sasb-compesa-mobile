import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import icon from "../../../assets/usuario_icon.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import Mapa from "./components/Mapa";

const Home = () => {
    const { usuarioLogado, networkConnected } = useContext(GlobalContext)

    useEffect(() => {
        if (!networkConnected) {
            alert("Dispositivo sem conexão de rede. Algumas funcionalidades são limitadas no modo offline.")
        }
    }, [])

    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Bem vindo,</Text>
                    <Text style={styles.username}>{`${usuarioLogado?.nome}!`}</Text>
                </View>

                <Image source={icon} style={styles.image} />
            </View>
            <Mapa />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    header: {
        height: 150,
        backgroundColor: "#223F99",
    },
    row: {
        flexDirection: "row",
        marginTop: 80,
        justifyContent: "space-between",
        marginHorizontal: 25,
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
})