import axios from 'axios'

const AxiosInstance = axios.create({
	baseURL: 'https://api.github.com/users/',
	// timeout: 1000,
})

export { AxiosInstance }
