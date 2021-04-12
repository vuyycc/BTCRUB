import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8797/'
})
export const getUser = () => {
    return axiosInstance.get("/")
}
export const createUser = (body) => {
    return axiosInstance.post('newUser', body)
}

export const deleteUser = (id) => {
    return axiosInstance.delete('deleteUser/' + id)
}

export const updateUser = (body) => {
    return axiosInstance.put('updateUser', body)
}