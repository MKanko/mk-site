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
    const response = await axios.get('http://localhost:3001/')
    dispatch({type: 'GET_HOME', payload: response.data})
}






