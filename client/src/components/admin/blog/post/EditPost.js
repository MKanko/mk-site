import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditPost extends Component {

    constructor(props) {
        // console.log('constprops:', props)
        super(props)
        this.state = {
            title: props.location.query.post.title,
            text_content: props.location.query.post.text_content,
            image: props.location.query.post.image
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let post = {
            title: this.state.title,
            text_content: this.state.text_content,
            image: this.state.image,
            id: this.props.location.query.post.id 
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editPost(post, next)
    }

    render() {
        // console.log('rendState:', this.state)
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Post Data
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    value={this.state.title}
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
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Content'
                                placeholder='Post page content...'
                                name='text_content'
                                value={this.state.text_content}
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

export default EditPost 