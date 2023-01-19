import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import IoniconsIcon from "@expo/vector-icons/Ionicons";

const SearchBar = ({ aditionalStyles }) => {
    return (
        <View style={[estilos.barraBusca, aditionalStyles]}>
            <TextInput
                style={estilos.input}
                placeholder="Digite o nome da barragem"
                keyboardType="text"
                onChangeText={() => { }}
                defaultValue={""}
            />
            <TouchableOpacity onPress={() => { }}>
                <IoniconsIcon name="search" size={20} color="#D9D9D9" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar;

const estilos = StyleSheet.create({
    barraBusca: {

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
    input: {
        flex: 1
    },
})