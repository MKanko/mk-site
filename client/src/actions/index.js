import backend from '../apis/backend'

export const signup = (user, next) => async (dispatch) => {
        const response = await backend.post('/users', {user}, {withCredentials: true})
        if (response.data.errors) {
        } else {
            dispatch({type: 'SIGNUP', payload: response.data})
            next.redirect()
        }   
}

export const login = (user, next) => async (dispatch) => {
    const response = await backend.post('/login', {user}, {withCredentials: true})
    if (response.data.errors) {
    } else {
        dispatch({type: 'LOGIN', payload: response.data})
        next.redirect()
    }
}

export const logout = (next) => async (dispatch) => {
    const response = await backend.delete('/logout', {withCredentials: true})
    dispatch({type: 'LOGOUT', payload: response.data})
    next.redirect()   
}

export const getHome = () => async (dispatch) => {
    const response = await backend.get('/home')
    dispatch({type: 'GET_HOME', payload: response.data.data.attributes})
}

export const editHome = (home, next) => async (dispatch) => {
    const response = await backend.patch('/home', {home})
    dispatch({type: 'EDIT_HOME', payload: response.data.data.attributes})
    next.redirect()
}

export const getAbout = () => async (dispatch) => {
    const response = await backend.get('/about')
    dispatch({type: 'GET_ABOUT', payload: response.data.data.attributes})
}

export const editAbout = (about, next) => async (dispatch) => {
    const response = await backend.patch('/about', {about})
    dispatch({type: 'EDIT_ABOUT', payload: response.data.data.attributes})
    next.redirect()
}

export const getPortfolio = () => async (dispatch) => {
    const response = await backend.get('/portfolio')
    dispatch({type: 'GET_PORTFOLIO', payload: response.data.data.attributes})
}

export const editPortfolio = (portfolio, next) => async (dispatch) => {
    const response = await backend.patch('/portfolio', {portfolio})
    dispatch({type: 'EDIT_PORTFOLIO', payload: response.data.data.attributes})
    next.redirect()
}

export const getProjects = () => async (dispatch) => {
    const response = await backend.get('/projects')
    dispatch({type: 'GET_PROJECTS', payload: response.data.data})
}

export const createProject = (project, next) => async (dispatch) => {
    const response = await backend.post('/projects', {project})
    if (response.data.errors) {
    } else {
        dispatch({type: 'CREATE_PROJECT', payload: response.data.data})
        next.redirect()
    }   
}

export const editProject = (project, next) => async (dispatch) => {
    const projectId = project.id 
    delete project.id 
    const response = await backend.patch(`/projects/${projectId}`, {project})
    dispatch({type: 'EDIT_PROJECT', payload: response.data.data})
    next.redirect()
}

export const getProject = (id) => async (dispatch) => {
    const response = await backend.get(`/projects/${id}`)
    dispatch({type: 'GET_PROJECT', payload: response.data.data.attributes})
}

export const getBlog = () => async (dispatch) => {
    const response = await backend.get('/blog')
    dispatch({type: 'GET_BLOG', payload: response.data.data.attributes})
}

export const editBlog = (blog, next) => async (dispatch) => {
    const response = await backend.patch('/blog', {blog})
    dispatch({type: 'EDIT_BLOG', payload: response.data.data.attributes})
    next.redirect()
}

export const getPosts = () => async (dispatch) => {
    const response = await backend.get('/posts')
    dispatch({type: 'GET_POSTS', payload: response.data.data})
}

export const createPost = (post, next) => async (dispatch) => {
    const response = await backend.post('/posts', {post})
    if (response.data.errors) {
    } else {
        dispatch({type: 'CREATE_POST', payload: response.data.data})
        next.redirect()
    }   
}

export const editPost = (post, next) => async (dispatch) => {
    const response = await backend.patch(`/posts/${post.id}`, {post})
    dispatch({type: 'EDIT_POST', payload: response.data.data})
    next.redirect()
}

export const getPost = (id) => async (dispatch) => {
    const response = await backend.get(`/posts/${id}`)
    dispatch({type: 'GET_POST', payload: response.data.data.attributes})
}

export const getResume = () => async (dispatch) => {
    const response = await backend.get('/resume')
    dispatch({type: 'GET_RESUME', payload: response.data.data.attributes})
}

export const editResume = (resume, next) => async (dispatch) => {
    const response = await backend.patch('/resume', {resume})
    dispatch({type: 'EDIT_RESUME', payload: response.data.data.attributes})
    next.redirect()
}

export const getCategories = () => async (dispatch) => {
    const response = await backend.get('/categories')
    dispatch({type: 'GET_CATEGORIES', payload: response.data.data})
}

export const createCategory = (category, next) => async (dispatch) => {
    const response = await backend.post('/categories', {category})
    if (response.data.errors) {
    } else {
        dispatch({type: 'CREATE_CATEGORY', payload: response.data.data})
        next.redirect()
    }   
}

export const editCategory = (category, next) => async (dispatch) => {
    const response = await backend.patch(`/categories/${category.id}`, {category})
    dispatch({type: 'EDIT_CATEGORY', payload: response.data.data})
    next.redirect()
}

export const getCategory = (id) => async (dispatch) => {
    const response = await backend.get(`/categories/${id}`)
    dispatch({type: 'GET_CATEGORY', payload: response.data.data.attributes})
}

export const getContact = () => async (dispatch) => {
    const response = await backend.get('/contact')
    dispatch({type: 'GET_CONTACT', payload: response.data.data.attributes})
}

export const editContact = (contact, next) => async (dispatch) => {
    const response = await backend.patch('/contact', {contact})
    dispatch({type: 'EDIT_CONTACT', payload: response.data.data.attributes})
    next.redirect()
}

export const createEmail = (mail, next) => async (dispatch) => {
    const response = await backend.post('/emails', {mail})
    if (response.data.errors) {
        console.log(response.data.errors)
    } else {
        dispatch({type: 'CREATE_EMAIL', payload: response.data})
        next.redirect()
    }
}

export const getSkills = () => async (dispatch) => {
    const response = await backend.get('/skills')
    dispatch({type: 'GET_SKILLS', payload: response.data.data})
}

export const createSkill = (skill, next) => async (dispatch) => {
    const response = await backend.post('/skills', {skill})
    if (response.data.errors) {
    } else {
        dispatch({type: 'CREATE_SKILL', payload: response.data.data})
        next.redirect()
    }   
}

export const editSkill = (skill, next) => async (dispatch) => {
    const response = await backend.patch(`/skills/${skill.id}`, {skill})
    dispatch({type: 'EDIT_SKILL', payload: response.data.data})
    next.redirect()
}












