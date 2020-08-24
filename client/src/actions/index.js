import axios from 'axios'

export const signup = (user, next) => async (dispatch) => {
        const response = await axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        if (response.data.errors) {
        } else {
            dispatch({type: 'SIGNUP', payload: response.data})
            next.redirect()
        }   
}

export const login = (user, next) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    if (response.data.errors) {
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
    console.log('hit')
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
    dispatch({type: 'GET_ABOUT', payload: response.data.data.attributes})
}

export const editAbout = (about, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/about', {about})
    dispatch({type: 'EDIT_ABOUT', payload: response.data.data.attributes})
    next.redirect()
}

export const getPortfolio = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/portfolio')
    dispatch({type: 'GET_PORTFOLIO', payload: response.data.data.attributes})
}

export const editPortfolio = (portfolio, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/portfolio', {portfolio})
    dispatch({type: 'EDIT_PORTFOLIO', payload: response.data.data.attributes})
    next.redirect()
}

export const getProjects = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/projects')
    dispatch({type: 'GET_PROJECTS', payload: response.data.data})
}

export const editProject = (project, next) => async (dispatch) => {
    const projectId = project.id 
    delete project.id 
    const response = await axios.patch(`http://localhost:3001/projects/${projectId}`, {project})
    dispatch({type: 'EDIT_PROJECT', payload: response.data.data})
    next.redirect()
}

export const getProject = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/projects/${id}`)
    dispatch({type: 'GET_PROJECT', payload: response.data.data.attributes})
}

export const getBlog = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/blog')
    dispatch({type: 'GET_BLOG', payload: response.data.data.attributes})
}

export const editBlog = (blog, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/blog', {blog})
    dispatch({type: 'EDIT_BLOG', payload: response.data.data.attributes})
    next.redirect()
}

export const getPosts = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/posts')
    dispatch({type: 'GET_POSTS', payload: response.data.data})
}

export const createPost = (post, next) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/posts', {post})
    if (response.data.errors) {
    } else {
        dispatch({type: 'CREATE_POST', payload: response.data.data})
        next.redirect()
    }   
}

export const editPost = (post, next) => async (dispatch) => {
    const response = await axios.patch(`http://localhost:3001/posts/${post.id}`, {post})
    dispatch({type: 'EDIT_POST', payload: response.data.data})
    next.redirect()
}

export const getPost = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/posts/${id}`)
    dispatch({type: 'GET_POST', payload: response.data.data.attributes})
}

export const getResume = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/resume')
    dispatch({type: 'GET_RESUME', payload: response.data.data.attributes})
}

export const editResume = (resume, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/resume', {resume})
    dispatch({type: 'EDIT_RESUME', payload: response.data.data.attributes})
    next.redirect()
}

export const getCategories = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/categories')
    dispatch({type: 'GET_CATEGORIES', payload: response.data.data})
}

export const editCategory = (category, next) => async (dispatch) => {
    const response = await axios.patch(`http://localhost:3001/categories/${category.id}`, {category})
    dispatch({type: 'EDIT_CATEGORY', payload: response.data.data})
    next.redirect()
}

export const getCategory = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/categories/${id}`)
    dispatch({type: 'GET_CATEGORY', payload: response.data.data.attributes})
}

export const getContact = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/contact')
    dispatch({type: 'GET_CONTACT', payload: response.data.data.attributes})
}

export const editContact = (contact, next) => async (dispatch) => {
    const response = await axios.patch('http://localhost:3001/contact', {contact})
    dispatch({type: 'EDIT_CONTACT', payload: response.data.data.attributes})
    next.redirect()
}

export const createEmail = (email, next) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/emails', {email})
    if (response.data.errors) {
        console.log(response.data.errors)
    } else {
        dispatch({type: 'CREATE_EMAIL', payload: response.data})
        next.redirect()
    }
}

export const getSkills = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/skills')
    dispatch({type: 'GET_SKILLS', payload: response.data.data})
}

export const editSkill = (skill, next) => async (dispatch) => {
    const response = await axios.patch(`http://localhost:3001/skills/${skill.id}`, {skill})
    dispatch({type: 'EDIT_SKILL', payload: response.data.data})
    next.redirect()
}












