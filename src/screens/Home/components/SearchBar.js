import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ busca, setBusca, position }) => {
    return (
        <View style={[styles.input, { position: position }]}>
            <TextInput
                style={styles.text}
                placeholder="Digite o nome da barragem"
                inputMode="text"
                onChangeText={setBusca}
                defaultValue={busca}
            />
            <Ionicon name="search" size={20} color="#D9D9D9" />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        zIndex: 1,
        margin: 25,
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
        padding: 15,
    },
    text: {
        flex: 1
    },
})