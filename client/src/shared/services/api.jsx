import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:3333/api/",
});

export const createNewProduct = async (data) => {
    try {
        console.log("data dentro da API service", data)
        await api.post("/catalog", data)
    } catch (error) {
        console.error("Erro ao adicionar produto no catalogo", error)
    }
}

export default api;