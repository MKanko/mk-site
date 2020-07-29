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
                        placeholder="password_confirmation"
                        onChange={this.handleChange}
                    />

                    <button type="submit" placeholder="submit">Sign Up</button>
                </form>
            </div>
        )
    }

}

export default Signup 