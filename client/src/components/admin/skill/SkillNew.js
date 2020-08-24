import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class SkillNew extends Component {

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
        const { name, value } = event.target 
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        console.log('Create Post Submit:', this.props)
        event.preventDefault()
        const { name, image, image_web, description } = this.state 
        let post = {
            name: name,
            image: image,
            image_web: image_web,
            description: description
            // id: this.props.location.query.post.id 
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.createSkill(skill, next)
    }

    render() {
        const { name, image, image_web, description } = this.state
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Create Skill
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Name'
                                    placeholder='Name'
                                    name='name'
                                    value={name}
                                    onChange={this.handleOnChange}
                                />
                                <Form.Input
                                    fluid
                                    label='Image'
                                    placeholder='Image'
                                    name='image'
                                    value={image}
                                    onChange={this.handleOnChange} 
                                />
                                <Form.Input
                                    fluid
                                    label='Image Web'
                                    placeholder='Image Web'
                                    name='image_web'
                                    value={image_web}
                                    onChange={this.handleOnChange} 
                                />
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Description'
                                placeholder='Description content...'
                                name='description'
                                value={description}
                                onChange={this.handleOnChange}
                            />
                            <Form.Button>Submit Post</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default SkillNew