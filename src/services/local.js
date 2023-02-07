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

