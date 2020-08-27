import axios from 'axios'

export default axios.create({baseURL: 'http://api.markkanko.com'})

// export default axios.create({baseURL: 'http://localhost:3001'})