import React, { useContext } from "react";
import { Dimensions, Image, StyleSheet, TextInput, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import icon from "../../../../assets/dam.png";
import SearchBar from "./SearchBar";
import { BarragemContext } from "../../../contexts/BarragemContext";

const Mapa = () => {
    const { barragens, busca, setBusca, coordenadas } = useContext(BarragemContext)

    return (
        <View>
            {/* <SearchBar busca={busca} setBusca={setBusca} position={'absolute'} /> */}
            <View style={styles.input}>
                <TextInput
                    style={styles.text}
                    placeholder="Digite o nome da barragem"
                    keyboardType="text"
                    onChangeText={setBusca}
                    defaultValue={busca}
                />
            </View>

            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={coordenadas}
                animateToRegion={coordenadas}
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

export default Mapa;

const styles = StyleSheet.create({
    map: {
        marginVertical: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    icon: {
        width: 30,
        height: 30
    },
    input: {
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
    text: {
        flex: 1
    },
})