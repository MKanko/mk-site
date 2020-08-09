import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment } from 'semantic-ui-react'

import { getBlog } from '../actions'
import PostIndex from '../components/post/PostIndex'

class BlogContainer extends Component {

    componentDidMount() {
       this.props.getBlog() 
    }

    render() {
        return (
            <div>
                <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Row columns={1}>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h1' color='yellow' textAlign='center'>
                                {this.props.title}
                            </Header>
                            <Segment inverted secondary>
                                {this.props.text_content}
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <PostIndex posts={this.props.posts} />             
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.manageBlog.blog.title,
        text_content: state.manageBlog.blog.text_content,
        image: state.manageBlog.blog.image,
        posts: state.manageBlog.blog.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getBlog: () => {dispatch(getBlog())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)