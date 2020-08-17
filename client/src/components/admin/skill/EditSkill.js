import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditSkill extends Component {

    constructor(props) {
        super(props)
        this.state = {
           name: '', 
           image: '',
           image_web: '',
           description: '' 
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let skill = {
            name: this.state.name,
            image: this.state.image,
            image_web: this.state.image_web,
            description: this.state.description,
            id: this.props.location.query.skill.id       
        }
        let next = {
            redirect: () => this.props.history.push('/about')
        }
        this.props.location.query.editSkill(skill, next)
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Skills Data
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Name'
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleOnChange}
                                />
                                <Form.Input
                                    fluid
                                    label='Image'
                                    placeholder='Image'
                                    name='image'
                                    value={this.state.image}
                                    onChange={this.handleOnChange} 
                                />
                                <Form.Input
                                    fluid
                                    label='Image Web'
                                    placeholder='Image Web'
                                    name='image_web'
                                    value={this.state.image_web}
                                    onChange={this.handleOnChange} 
                                />
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Description'
                                placeholder='Description'
                                name='description'
                                value={this.state.description}
                                onChange={this.handleOnChange}
                            />
                            <Form.Button>Submit Update</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default EditSkill 