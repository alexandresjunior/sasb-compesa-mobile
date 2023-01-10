import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import imagem from "../../../assets/usuario_icon.png";

const Home = () => {
    const [barragem, setBarragem] = useState("");

    return (
        <>
            <View style={estilos.cabecalho}>
                <View style={estilos.containerRow}>
                    <View>
                        <Text style={estilos.titulo}>Bem vindo!</Text>
                        <Text style={estilos.usuario}>Alexandre de Souza Jr.</Text>
                    </View>

                    <Image source={imagem} style={estilos.imagem} />
                </View>

                <View style={estilos.input}>
                    <TextInput
                        placeholder="Digite o nome da barragem"
                        keyboardType="text"
                        onChangeText={(nome) => setBarragem(nome)}
                        defaultValue={""}
                    />
                    <TouchableOpacity onPress={() => { }}>
                        <IoniconsIcon name="search" size={20} color="#D9D9D9" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Home;

const estilos = StyleSheet.create({
    cabecalho: {
        height: 150,
        backgroundColor: "#223F99",
    },
    containerRow: {
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
    input: {
        margin: 25,
        height: 50,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        color: "#CACACA",
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        backgroundColor: "white",
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 15
    },
})