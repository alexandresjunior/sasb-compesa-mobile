import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import BarragemCard from "./components/BarragemCard";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { InspecaoGlobalContext } from "../../contexts/InspecaoGlobalContext";
import SearchBar from "../Home/components/SearchBar";
import { BarragemContext } from "../../contexts/BarragemContext";

const Barragem = () => {
    const navigation = useNavigation()
    const { setBarragem, setPaginaAtual } = useContext(InspecaoGlobalContext)
    const { barragens, busca, setBusca } = useContext(BarragemContext)

    return (
        <>
            <View>
                <Header title={"Selecionar Barragem"} showButton={true} />
                <SearchBar busca={busca} setBusca={setBusca} position={'relative'} />
            </View>

            <FlatList
                data={barragens}
                renderItem={({ item }) => <BarragemCard item={item} onPress={() => {
                    navigation.navigate("Inspecoes Realizadas")
                    setBarragem(item)
                    setPaginaAtual(0)
                }} />}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default Barragem;