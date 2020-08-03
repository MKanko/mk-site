import React, { Component } from 'react'

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
        console.log(this.props)
        event.preventDefault()
        const { username, password, password_confirmation } = this.state
        let user = {
            username: username,
            password: password,
            password_confirmation: password_confirmation
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }       
        this.props.location.query.signup(user, next)
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
               
            </div>
        )
    }

}

export default Signup 