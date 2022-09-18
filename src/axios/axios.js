import axios from 'axios'

const fetchWiki = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
})

fetchWiki.interceptors.response.use(
  (resp) => {
    return resp
  },
  (error) => {
    window.alert(error.message)
  }
)

const defaultParams = {
  format: 'json',
  action: 'query',
  origin: '*',
}

fetchWiki.interceptors.request.use(
  (config) => {
    config.params = {
      ...defaultParams,
      ...config.params,
    }
    return config
  },
  (error) => {
    window.alert(error.message)
  }
)

export { fetchWiki }
