import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ busca, setBusca, position }) => {
    const [input, setInput] = useState(busca)

    return (
        <View style={[styles.input, { position: position }]}>
            <TextInput
                style={styles.text}
                placeholder="Digite o nome da barragem"
                keyboardType="text"
                onChangeText={setInput}
                defaultValue={busca}
            />
            <TouchableOpacity onPress={() => setBusca(input)}>
                <Ionicon name="search" size={20} color="#D9D9D9" />
            </TouchableOpacity>
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