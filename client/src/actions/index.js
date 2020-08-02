import axios from 'axios'

export const signup = (user, next) => async (dispatch) => {
        const response = await axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        if (response.data.errors) {
            console.log(response.data.errors)
        } else {
            dispatch({type: 'SIGNUP', payload: response.data})
            next.redirect()
        }
        
            // .then(response => response.json())
            // .then(user => dispatch({type: 'SIGNUP', user}))
            // .catch(error => console.log('api errors:', error))   
}

export const login = () => {
    return {

    }
}

export const logout = () => {
    return {
        
    }
}






