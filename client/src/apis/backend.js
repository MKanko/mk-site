import axios from 'axios'

const URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:3001' : 'https://api.markkanko.com'


export default axios.create({baseURL: URL})

