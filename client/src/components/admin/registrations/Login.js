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

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
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
            </div>
        )
    }

}

export default Login 