import React, { useContext, useState } from "react";
import { FlatList, View } from "react-native";
import BarragemCard from "./components/BarragemCard";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { InspecaoGlobalContext } from "../../contexts/InspecaoGlobalContext";
import SearchBar from "../Home/components/SearchBar";
import { useBarragens } from "../../hooks/useBarragens";

const Barragem = () => {
    const navigation = useNavigation()
    const { setBarragem } = useContext(InspecaoGlobalContext)
    const [busca, setBusca] = useState()
    const barragens = useBarragens(busca)

    return (
        <FlatList
            data={barragens}
            renderItem={({ item }) => <BarragemCard item={item} onPress={() => {
                navigation.navigate("Inspecoes Realizadas")
                setBarragem(item)
            }} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (
                    <View>
                        <Header title={"Selecionar Barragem"} showButton={true} />
                        <SearchBar busca={busca} setBusca={setBusca} position={'relative'} />
                    </View>
                )
            }}
        />
    )
}

export default Barragem;
