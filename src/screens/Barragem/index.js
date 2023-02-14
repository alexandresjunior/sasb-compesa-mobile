import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BarragemCard from "./components/BarragemCard";
import FormTextInput from "../../components/inputs/FormTextInput";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useBarragens } from "../../hooks/useBarragens";

const Barragem = () => {
    const navigation = useNavigation()
    const [barragens] = useBarragens()

    return (
        <FlatList
            data={barragens}
            renderItem={({ item }) => <BarragemCard item={item} onPress={() => navigation.navigate("Inspecoes Realizadas")} />}
            keyExtractor={item => item.idBarragem}
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