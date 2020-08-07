import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

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
        console.log(this.props)
        event.preventDefault()
        const { username, password } = this.state 
        let user = {
            username: username, 
            password: password
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.login(user, next)
    }

    render() {
        const { username, password } = this.state 

        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='black' textAlign='center'>
                         Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='username' 
                            name='username' 
                            value={username}
                            onChange={this.handleChange} 
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            name="password"
                            value={password}
                            type='password'
                            onChange={this.handleChange}
                        />
                        <Button color='grey' fluid size='large'>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        <Link to='/signup'>sign up</Link>
                    </Message>
                    </Grid.Column>
                </Grid>
            </div> 
        )
    }

}

export default Login 