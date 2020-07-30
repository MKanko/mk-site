import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            errors: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, password_confirmation } = this.state

        let user = {
            username: username,
            password: password,
            password_confirmation: password_confirmation
        }

        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.status === 'created') {
                    this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
    }

    redirect = () => {
        this.props.history.push('/admin/home')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => <li key={error}>{error}</li>)}
                </ul>
            </div>
        )
    }

    render() {
        const { username, password, password_confirmation} = this.state 

        return (
            <div>
                <h3>Sign Up</h3>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        placeholder="password confirmation"
                        onChange={this.handleChange}
                    />

                    <button type="submit" placeholder="submit">Sign Up</button>
                </form>
                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
            </div>
        )
    }

}

export default Signup 