import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

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
        const { username, password, password_confirmation } = this.state 

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
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    type='password'
                                    placeholder='Password Confirmation'
                                    name='password_confirmation'
                                    value={password_confirmation}
                                    onChange={this.handleChange}
                                />
                                <Button color='grey' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default Signup 