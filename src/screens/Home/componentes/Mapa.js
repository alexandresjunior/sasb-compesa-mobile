import React from "react";
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Mapa = () => {
    const initialRegion = {
        latitude: 49.2576508,
        longitude: -123.2639868,
        latitudeDelta: 100,
        longitudeDelta: 100,
    };

    return (
        <View>
            <View style={estilos.barraBusca}>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite o nome da barragem"
                    keyboardType="text"
                    onChangeText={(nome) => setBarragem(nome)}
                    defaultValue={""}
                />
                <TouchableOpacity onPress={() => { }}>
                    <IoniconsIcon name="search" size={20} color="#D9D9D9" />
                </TouchableOpacity>
            </View>
            <MapView
                style={estilos.mapa}
                initialRegion={initialRegion}
            />
        </View>
    )
}

export default Mapa;

const estilos = StyleSheet.create({
    barraBusca: {
        position: 'absolute',
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
    input: {
        flex: 1
    },
    mapa: {
        marginVertical: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})