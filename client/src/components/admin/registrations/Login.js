import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: ''
        }
    }

    componentDidMount() {
        return this.props.loggedInStatus ? this.redirect() : null
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state 

        let user = {
            username: username, 
            password: password
        }

        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.logged_in) {
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
        const { username, password } = this.state 

        return (
            <div>
                <h3>Log In</h3>

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

                    <button type="submit" placeholder="submit">Log In</button>

                    <div>or <Link to='/signup'>sign up</Link></div>
                </form>
                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
            </div>
        )
    }

}

export default Login 