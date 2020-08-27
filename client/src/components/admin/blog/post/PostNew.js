import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

class PostNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text_content: '',
            image: '',
            editorState: EditorState.createEmpty()
        }
    }

    handleOnChange = (event, editorState) => {
        const { name, value } = event.target 
        this.setState({
            [name]: value,
            editorState: editorState 
        })
    }

    handleSubmit = (event) => {
        console.log('Create Post Submit:', this.props)
        event.preventDefault()
        const { title, text_content, image, editorState } = this.state 
        let post = {
            title: title,
            text_content: text_content,
            image: image,
            editorState: editorState
            // id: this.props.location.query.post.id 
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.createPost(post, next)
    }

    render() {
        const { title, text_content, image, editorState } = this.state
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Create Post
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

                            <Editor 
                                editorState={editorState}
                                wrapperClassName='rich-editor demo-wrapper'
                                editorClassName='demo-editor'
                                onChange={this.handleOnChange}
                            />
                            
                            {/* <Form.TextArea 
                                label='Content'
                                placeholder='Post content...'
                                name='text_content'
                                value={text_content}
                                onChange={this.handleOnChange}
                            /> */}
                            <Form.Button>Submit Post</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default PostNew 