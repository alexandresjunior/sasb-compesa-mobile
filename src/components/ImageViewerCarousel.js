import React from "react";
import { ScrollView } from "react-native";
import ImageViewerSection from "./sections/ImageViewerSection";

const ImageViewerCarousel = ({ anexos, setAnexos }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            pagingEnabled
            horizontal
        >
            {
                anexos?.map((anexo, indice) => {
                    return (
                        <ImageViewerSection
                            anexo={anexo}
                            anexos={anexos}
                            setAnexos={setAnexos}
                            indice={indice}
                            key={indice}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default ImageViewerCarousel;