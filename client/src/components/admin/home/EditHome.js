import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text_content: '',
            image: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value  
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { title, text_content, image } = this.state
        let home = {
            title: title,
            text_content: text_content,
            image: image 
        }
        let next = {
            redirect: () => this.props.history.push('/')
        }       
        this.props.location.query.editHome(home, next) 
        
    }

    render() {
        const { title, text_content, image } = this.state 
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Home Data
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    value={title}
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
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Content'
                                placeholder='Home page content...'
                                name='text_content'
                                value={text_content}
                                onChange={this.handleOnChange}
                            />
                            <Form.Button>Submit Edits</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default EditHome