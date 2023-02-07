import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import icon from "../../../assets/usuario_icon.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import Mapa from "./components/Mapa";

const Home = () => {
<<<<<<< HEAD
    const { networkConnected } = useContext(GlobalContext);
=======
    const [barragem, setBarragem] = useState("");

    const { usuarioLogado, networkConnected } = useContext(GlobalContext);
>>>>>>> c9e8602 (Remoção de usuário mockado; Função de logout)

    useEffect(() => {
        if (!networkConnected) {
            alert("Dispositivo sem conexão de rede. Algumas funcionalidades são limitadas no modo offline.")
        }
    }, [])

    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <View>
<<<<<<< HEAD
                    <Text style={styles.title}>Bem vindo!</Text>
                    <Text style={styles.username}>Alexandre de Souza Jr.</Text>
=======
                    <Text style={estilos.titulo}>Bem vindo,</Text>
                    <Text style={estilos.usuario}>{`${usuarioLogado.nome}!`}</Text>
>>>>>>> c9e8602 (Remoção de usuário mockado; Função de logout)
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
<<<<<<< HEAD
    username: {
        fontSize: 18,
=======
    usuario: {
        fontSize: 20,
>>>>>>> c9e8602 (Remoção de usuário mockado; Função de logout)
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