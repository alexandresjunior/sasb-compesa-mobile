import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import BarragemCard from "./components/BarragemCard";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { InspecaoGlobalContext } from "../../contexts/InspecaoGlobalContext";
import SearchBar from "../Home/components/SearchBar";
import { useBarragens } from "../../hooks/useBarragens";
import { listaBarragens } from "../../mocks";
import { filtrarBarragensPeloNome } from "../../utils";
import Ionicon from "react-native-vector-icons/Ionicons";

const Barragem = () => {
    const navigation = useNavigation()
    const { setBarragem } = useContext(InspecaoGlobalContext)
    const [busca, setBusca] = useState()
    const [barragens, setBarragens] = useState(listaBarragens)

    useEffect(() => {
        // Filtrar da lista obtida da API e não do state!
        const barragensFiltradas = filtrarBarragensPeloNome(listaBarragens, busca)

        setBarragens(barragensFiltradas)
    }, [busca])

    return (
        <View>
            <Header title={"Selecionar Barragem"} showButton={true} />
            {/* <SearchBar busca={busca} setBusca={setBusca} position={'relative'} /> */}
            <View style={styles.input}>
                <TextInput
                    style={styles.text}
                    placeholder="Digite o nome da barragem"
                    keyboardType="text"
                    onChangeText={setBusca}
                    defaultValue={busca}
                />
            </View>
            <FlatList
                data={barragens}
                renderItem={({ item }) => <BarragemCard item={item} onPress={() => {
                    navigation.navigate("Inspecoes Realizadas")
                    setBarragem(item)
                }} />}
                keyExtractor={item => item.id}
            />
        </View>


    )
}

export default Barragem;

const styles = StyleSheet.create({
    input: {
        margin: 25,
        borderRadius: 5,
        borderColor: "#CACACA",
        borderWidth: 1,
        color: "#CACACA",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 15,
    },
    text: {
        flex: 1
    },
})