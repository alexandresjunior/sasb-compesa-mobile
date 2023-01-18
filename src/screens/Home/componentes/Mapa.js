import React from "react";
import { Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { listaBarragens } from "../../../mocks";
import dam_icon from "../../../../assets/dam.png";

const Mapa = () => {
    const initialRegion = {
        latitude: -8.470697,
        longitude: -38.371057,
        latitudeDelta: 10,
        longitudeDelta: 10,
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
            >
                {listaBarragens.map((barragem, index) => (
                    <Marker
                        style={estilos.icone}
                        key={index}
                        coordinate={{ latitude: barragem.localizacao.latitude, longitude: barragem.localizacao.longitude }}
                        title={barragem.nome}
                        description={barragem.titularidade}
                    >
                        <Image source={dam_icon} style={estilos.icone} />
                    </Marker>
                ))}
            </MapView>
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
    },
    icone: {
        width: 30,
        height: 30
    }
})