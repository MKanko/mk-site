import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Transition, Header, Segment, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import { getCategory } from '../../actions'


class CategoryShow extends Component {

    componentDidMount() {
        this.props.getCategory(this.props.location.pathname.replace('/categories/', ''))
    }

    renderTextContent = () => {
        if (this.props.text_content) {
            return (
                <Segment inverted secondary>
                    <MDEditor.Markdown source={this.props.text_content} style={{textAlign: 'left', color: 'white'}} />
                </Segment>
            )
        }
    }

    renderSecTextContent = () => {
        if (this.props.secondary_text_content) {
            return (
                <Segment inverted secondary>
                    <MDEditor.Markdown source={this.props.secondary_text_content} style={{textAlign: 'left'}} />
                </Segment> 
            )
        }        
    }

    render() {
        return (
            <div>          
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>
                        <Grid.Column style={{ maxWidth: 600 }}>
                            <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                                {this.props.title}
                            </Header>
                            <Segment inverted secondary>
                                <MDEditor.Markdown source={this.props.description} style={{textAlign: 'left'}} />
                            </Segment>
                            {this.renderTextContent()}
                            {this.renderSecTextContent()}
                            <Button inverted secondary as={Link} to={{pathname: '/resume'}} size='mini' style={{color: '#DBCE07'}}>Back</Button>
                        </Grid.Column>
                    </Transition>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { title, description, text_content, secondary_text_content, image } = state.manageCategories.category
    return {
        title: title,
        description: description,
        text_content: text_content,
        secondary_text_content: secondary_text_content,
        image: image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getCategory: (id) => {dispatch(getCategory(id))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow)