import { createContext, useState } from "react";

export const QuestionFormContext = createContext({})

export const QuestionFormProvider = ({ children }) => {
    const [situacao, setSituacao] = useState();
    const [magnitude, setMagnitude] = useState();
    const [nivelPerigo, setNivelPerigo] = useState();
    const [anexos, setAnexos] = useState([]);
    const [comentarios, setComentarios] = useState();
    const [expandir, setExpandir] = useState(false);
    const [completo, setCompleto] = useState(false);

    const limparCampos = () => {
        setSituacao()
        setMagnitude()
        setNivelPerigo()
        setAnexos([])
        setComentarios()
        setExpandir(false)
        setCompleto(false)
    }

    return (
        <QuestionFormContext.Provider value={
            {
                situacao, setSituacao,
                magnitude, setMagnitude,
                nivelPerigo, setNivelPerigo,
                anexos, setAnexos,
                comentarios, setComentarios,
                expandir, setExpandir,
                completo, setCompleto,
                limparCampos
            }
        }>
            {children}
        </QuestionFormContext.Provider>
    )
}