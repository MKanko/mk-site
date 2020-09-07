import React, { Component } from 'react'
import { Grid, Header, Form, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

class CategoryEdit extends Component {

    constructor(props) {
        super(props)
        const { title, description, text_content, image } = props.location.query.category 
        this.state = {
            title: title,
            description: description,
            text_content: text_content,
            secondary_text_content: this.setString(),
            image: image
        }
    }

    setString = () => {
        const { secondary_text_content } = this.props.location.query.category 
        if (secondary_text_content) {
            return secondary_text_content
        } else {
            return ''
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target 
        this.setState({
            [name]: value
        })
    }

    handleEditorDescChange = (content) => {
        this.setState({
            description: content 
        })
    }

    handleEditorTextChange = (content) => {
        this.setState({
            text_content: content
        })
    }

    handleEditorSecTextChange = (content) => {
        this.setState({
            secondary_text_content: content
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { title, description, text_content, secondary_text_content, image } = this.state 
        let category = {
            title: title,
            description: description,
            text_content: text_content,
            secondary_text_content: secondary_text_content,
            image: image,
            id: this.props.location.query.category.id 
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editCategory(category, next)
    }

    render() {
        const { title, description, text_content, secondary_text_content, image } = this.state 
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Category Data
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
                        </Form>
                        <MDEditor
                            name='description'
                            value={description}
                            onChange={this.handleEditorDescChange}
                        /><br></br>
                        <MDEditor
                            name='text_content'
                            value={text_content}
                            onChange={this.handleEditorTextChange}
                        /><br></br>
                        <MDEditor
                            name='secondary_text_content'
                            value={secondary_text_content}
                            onChange={this.handleEditorSecTextChange}
                        /><br></br>
                        <Button onClick={this.handleSubmit}>Submit Update</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default CategoryEdit