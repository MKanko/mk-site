import React, { Component } from 'react'
import { Form, Grid, Header, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

class SkillEdit extends Component {

    constructor(props) {
        super(props)
        const { name, image, image_web, description } = props.location.query.skill 
        this.state = {
           name: name, 
           image: image,
           image_web: image_web,
           description: description  
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target 
        this.setState({
            [name]: value
        })
    }

    handleEditorChange = (content) => {
        this.setState({
            description: content 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, image, image_web, description } = this.state 
        let skill = {
            name: name,
            image: image,
            image_web: image_web,
            description: description,
            id: this.props.location.query.skill.id       
        }
        let next = {
            redirect: () => this.props.history.push('/about')
        }
        this.props.location.query.editSkill(skill, next)
    }

    render() {
        const { name, image, image_web, description } = this.state 
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
                        </Form>
                        <MDEditor
                            name='description'
                            value={description}
                            onChange={this.handleEditorChange}
                        /><br></br>
                        <Button onClick={this.handleSubmit}>Submit Update</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default SkillEdit 