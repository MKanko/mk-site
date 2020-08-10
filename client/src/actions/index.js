import axios from 'axios'

export const signup = (user, next) => async (dispatch) => {
        const response = await axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        if (response.data.errors) {
            console.log(response.data.errors)
        } else {
            dispatch({type: 'SIGNUP', payload: response.data})
            next.redirect()
        }   
}

export const login = (user, next) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    if (response.data.errors) {
        console.log(response.data.errors)
    } else {
        dispatch({type: 'LOGIN', payload: response.data})
        next.redirect()
    }
}

export const logout = (next) => async (dispatch) => {
    const response = await axios.delete('http://localhost:3001/logout', {withCredentials: true})
    dispatch({type: 'LOGOUT', payload: response.data})
    next.redirect()   
}

export const getHome = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/home')
    console.log('response: ', response)
    dispatch({type: 'GET_HOME', payload: response.data.data.attributes})
}

export const editHome = (home, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/home', {home})
    dispatch({type: 'EDIT_HOME', payload: response.data.data.attributes})
    next.redirect()
}

export const getAbout = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/about')
    console.log('response: ', response)
    dispatch({type: 'GET_ABOUT', payload: response.data.data.attributes})
}

export const editAbout = (about, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/about', {about})
    dispatch({type: 'EDIT_ABOUT', payload: response.data.data.attributes})
    next.redirect()
}

export const getPortfolio = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/portfolio')
    console.log('response: ', response)
    dispatch({type: 'GET_PORTFOLIO', payload: response.data.data.attributes})
}

export const editPortfolio = (portfolio, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/portfolio', {portfolio})
    dispatch({type: 'EDIT_PORTFOLIO', payload: response.data.data.attributes})
    next.redirect()
}

export const getProjects = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/projects')
    console.log('response: ', response)
    dispatch({type: 'GET_PROJECTS', payload: response.data.data})
}

export const editProject = (project, next) => async (dispatch) => {
    console.log(project)
    const response = await axios.patch(`http://localhost:3001/projects/${project.id}`, {project})
    console.log('proj response:', response)
    dispatch({type: 'EDIT_PROJECT', payload: response.data.data.attributes})
    next.redirect()
}

export const getBlog = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/blog')
    console.log('response: ', response)
    dispatch({type: 'GET_BLOG', payload: response.data.data.attributes})
}

export const editBlog = (blog, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/blog', {blog})
    dispatch({type: 'EDIT_BLOG', payload: response.data.data.attributes})
    next.redirect()
}









