import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { listaBarragens } from "../../../mocks";
import icon from "../../../../assets/dam.png";
import SearchBar from "./SearchBar";

const map = () => {
    const initialRegion = {
        latitude: -8.470697,
        longitude: -38.371057,
        latitudeDelta: 10,
        longitudeDelta: 10,
    };

    return (
        <View>
            <SearchBar />
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {listaBarragens.map((barragem, index) => (
                    <Marker
                        style={styles.icon}
                        key={index}
                        coordinate={{ latitude: barragem.localizacao.latitude, longitude: barragem.localizacao.longitude }}
                        title={barragem.nome}
                        description={barragem.titularidade}
                    >
                        <Image source={icon} style={styles.icon} />
                    </Marker>
                ))}
            </MapView>
        </View>
    )
}

export default map;

const styles = StyleSheet.create({
    map: {
        marginVertical: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    icon: {
        width: 30,
        height: 30
    }
})