import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { listaBarragens } from "../../../mocks";
import dam_icon from "../../../../assets/dam.png";
import SearchBar from "../../../components/SearchBar";

const Mapa = () => {
    const initialRegion = {
        latitude: -8.470697,
        longitude: -38.371057,
        latitudeDelta: 10,
        longitudeDelta: 10,
    };

    return (
        <View>
            <SearchBar aditionalStyles={{ position: 'absolute', zIndex: 1 }} />
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