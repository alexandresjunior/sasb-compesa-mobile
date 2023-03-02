import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import icon from "../../../../assets/dam.png";
import SearchBar from "./SearchBar";
import { useBarragens } from "../../../hooks/useBarragens";

const INITIAL_REGION = {
    latitude: -8.470697,
    longitude: -38.371057,
    latitudeDelta: 10,
    longitudeDelta: 10,
}

const map = () => {
    const [coordenadas, setCoordenadas] = useState(INITIAL_REGION)
    const [busca, setBusca] = useState("")
    const barragens = useBarragens(busca)

    // TODO: Mover de acordo com a barragem escolhida e alerta de nenhuma barragem encontrada
    useEffect(() => {
        if (barragens?.length === 1) {
            const barragem = barragens[0]

            setCoordenadas({
                latitude: barragem.localizacao.latitude,
                longitude: barragem.localizacao.longitude,
                latitudeDelta: 10,
                longitudeDelta: 10,
            })
        }
        console.log(coordenadas)
    }, [busca]) // coordenadas?

    return (
        <View>
            <SearchBar busca={busca} setBusca={setBusca} position={'absolute'} />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={coordenadas}
            >
                {barragens?.map((barragem, index) => (
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