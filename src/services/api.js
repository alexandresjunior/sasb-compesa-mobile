import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
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

//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
// }, (error) => {
//   console.error("Erro no interceptor do axios!")
//   return Promise.reject(error);
// });

// export const obterJsonWebToken = async (url, setToken) => {
//   await api.get(url)
//     .then((response) => setToken(response.data.token))
//     .catch((error) => console.error(error))
// }

export default api;

export const obterRelatorioPDF = async (dados) => {
  try {
    const response = await apiRelatorio.get('/sasb/relatorio', { responseType: 'arraybuffer' })

    // Retornar o PDF em base64 
    return response.request._response
  } catch (error) {
    alert(error)
  }
}
