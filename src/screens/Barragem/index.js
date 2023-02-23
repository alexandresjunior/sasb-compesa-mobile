import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BarragemCard from "./components/BarragemCard";
import FormTextInput from "../../components/inputs/FormTextInput";
import { listaBarragens } from "../../mocks";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { InspecaoGlobalContext } from "../../contexts/InspecaoGlobalContext";

const Barragem = () => {
    const navigation = useNavigation()
    const { setBarragem } = useContext(InspecaoGlobalContext)

    return (
        <FlatList
            data={listaBarragens}
            renderItem={({ item }) => <BarragemCard item={item} onPress={() => {
                navigation.navigate("Inspecoes Realizadas")
                setBarragem(item)
            }} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => {
                return (
                    <>
                        <Header title={"Selecionar Barragem"} showButton={true} />
                        <View style={styles.container}>
                            <FormTextInput placeholder={"Digite o nome da barragem..."} type={"text"} setValue={() => { }} defaultValue={""} />
                        </View>
                    </>
                )
            }}
        />
    )
}

export default Barragem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginBottom: 15
    },
})