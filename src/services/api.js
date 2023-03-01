import axios from "axios";
import { salvarUsuarioLogado } from "./local";
import { salvarLocalmenteBarragensInfo } from "./local";

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

export const login = async (email, senha, setUsuarioLogado) => {
  // Response possui os campos: status, mensagem e usuario
  await apiRelatorio.post("/sasb/login", { email: email, senha: senha })
    .then(async (response) => {
      if (response.data.status == 200) {
        setUsuarioLogado(response.data.usuario)
        await salvarUsuarioLogado(JSON.stringify(response.data.usuario))
      } else {
        alert(response.data.mensagem)
      }
    })
    .catch(() => alert("Erro inesperado! Tente novamente."))
}

export const cadastrar = async (nome, email, senha, navigation) => {
  await apiRelatorio.post("/sasb/cadastro", { nome: nome, email: email, senha: senha })
    .then((response) => {
      if (response.data.status == 200) {
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

export const obterBarragensInfo = async (url, setBarragens) => {
  await api.get(url)
    .then((response) => {
      setBarragens(response.data.barragens)
      salvarLocalmenteBarragensInfo(response.data.barragens)
    })
    .catch((error) => console.error(error))
}

// TODO: Interceptação de requisições que usam JWT
// api.interceptors.request.use((config) => {
//   // TODO: Usar localStorage / securityStorage
//   const token = sessionStorage.getItem("userToken");

//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
// }, (error) => {
//   console.error("Erro no interceptor do axios!")
//   return Promise.reject(error);
// });

// export const obterJsonWebToken = async (url, setToken) => {
//   await axios.get(url)
//     .then((response) => setToken(response.data.token))
//     .catch((error) => console.error(error))
// }
