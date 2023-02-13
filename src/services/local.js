import AsyncStorage from "@react-native-async-storage/async-storage"

export const obterUsuarioLogado = async (setUsuarioLogado) => {
    const usuario = await AsyncStorage.getItem('usuario')

    setUsuarioLogado(usuario != null ? JSON.parse(usuario) : null)
}

export const salvarUsuarioLogado = async (usuario) => {
    await AsyncStorage.setItem('usuario', usuario)
}

export const logout = async () => {
    await AsyncStorage.removeItem('usuario')
}

export const salvarFormularioLocalmente = async (respostas) => {
    try {
        const formulario = JSON.stringify(respostas)

        await AsyncStorage.setItem('formulario', formulario)
    } catch (erro) {
        console.error(erro)
    }
}

export const obterFormularioSalvoLocalmente = async () => {
    try {
        const formulario = await AsyncStorage.getItem('formulario')

        return formulario != null ? JSON.parse(formulario) : null;
    } catch (erro) {
        console.error(erro)
    }
}

export const removerFormularioSalvoLocalmente = async () => {
    try {
        await AsyncStorage.removeItem('formulario')
    } catch (erro) {
        console.error(erro)
    }
}

export const salvarLocalmenteBarragensInfo = async (barragens) => {
    try {
        await AsyncStorage.setItem('barragens', JSON.stringify(barragens))
        await AsyncStorage.setItem('ultimaSincronizacao', new Date())
    } catch (erro) {
        console.error(erro)
    }
}

export const obterUltimaSincronizacao = async () => {
    try {
        await AsyncStorage.getItem('ultimaSincronizacao')
    } catch (erro) {
        console.error(erro)
    }
}
