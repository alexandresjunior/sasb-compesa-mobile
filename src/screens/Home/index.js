import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import imagem from "../../../assets/usuario_icon.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import Mapa from "./componentes/Mapa";

const Home = () => {
    const [barragem, setBarragem] = useState("");

    const { networkConnected } = useContext(GlobalContext);

    useEffect(() => {
        if (!networkConnected) {
            alert("Dispositivo sem conexão de rede. Algumas funcionalidades são limitadas no modo offline.")
        }
    }, [])


    return (
        <View style={estilos.cabecalho}>
            <View style={estilos.row}>
                <View>
                    <Text style={estilos.titulo}>Bem vindo!</Text>
                    <Text style={estilos.usuario}>Alexandre de Souza Jr.</Text>
                </View>

                <Image source={imagem} style={estilos.imagem} />
            </View>
            <Mapa />
        </View>
    )
}

export default Home;

const estilos = StyleSheet.create({
    cabecalho: {
        height: 150,
        backgroundColor: "#223F99",
    },
    row: {
        flexDirection: "row",
        marginTop: 80,
        justifyContent: "space-between",
        marginHorizontal: 25,
    },
    titulo: {
        fontSize: 14,
        color: "white",
    },
    usuario: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: 5
    },
    imagem: {
        width: 50,
        height: 50,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 25
    },
})