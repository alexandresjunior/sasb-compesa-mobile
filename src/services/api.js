import axios from "axios";
import { salvarUsuarioLogado } from "./local";

const api = axios.create({
  baseURL: "http://10.101.28.49:8081",
  headers: {
    Accept: "application/json",
    Content: "application/json"
  }
});

const apiRelatorio = axios.create({
  baseURL: "https://sasb-compesa-pdf-api-alexandresjunior.vercel.app"
});

// // Interceptação de requisições que usam JWT
// api.interceptors.request.use((config) => {
//   // TODO: Usar localStorage / securityStorage
//   const token = sessionStorage.getItem("userToken");

export const login = async (email, senha, setUsuario) => {
  await api.post("/sasb/usuarios/login", { email: email, senha: senha })
    .then(async (response) => {
      if (response.status == 200) {
        setUsuario(response.data)
        await salvarUsuarioLogado(JSON.stringify(response.data))
      } else {
        alert("Email/senha inválidos!")
      }
    })
    .catch(() => alert("Email/senha inválidos!"))
}

// Interceptação de requisições que usam JWT
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

export const obterRelatorioPDF = async (dados) => {
  try {
    const response = await apiRelatorio.get('/sasb/relatorio', { responseType: 'arraybuffer' })

    // Retornar o PDF em base64 
    return response.request._response
  } catch (error) {
    alert(error)
  }
}

export default api;
