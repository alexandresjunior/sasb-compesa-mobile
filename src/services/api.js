import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    Content: "application/json"
  }
});

const apiRelatorio = axios.create({
  baseURL: "https://sasb-compesa-pdf-api-alexandresjunior.vercel.app"
});

export const login = async (email, senha, setUsuarioLogado, navigation) => {
  // Response possui os campos: status, mensagem e usuario
  await apiRelatorio.post("/sasb/login", { email: email, senha: senha })
    .then(async (response) => {
      if (response.data.status === 200) {
        setUsuarioLogado(response.data.usuario)
        navigation.navigate("Tab Rotas")
      } else {
        alert(response.data.mensagem)
      }
    })
    .catch(() => alert("Erro inesperado! Tente novamente."))
}

export const cadastrar = async (nome, email, senha, navigation) => {
  await apiRelatorio.post("/sasb/cadastro", { nome: nome, email: email, senha: senha })
    .then((response) => {
      if (response.data.status === 200) {
        alert(response.data.mensagem)
        navigation.navigate("Log In")
      } else {
        alert(response.data.mensagem)
      }
    })
    .catch(() => alert("Erro inesperado! Tente novamente."))
}

export const obterRelatorioPDF = async (dados) => {
  try {
    const response = await apiRelatorio.get('/sasb/relatorio', { responseType: 'arraybuffer' })

    // Retornar o PDF em base64 
    return response.request._response
  } catch (error) {
    alert(error)
  }
}


