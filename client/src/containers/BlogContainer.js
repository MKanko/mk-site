import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment, Transition } from 'semantic-ui-react'

import { getBlog } from '../actions'
import PostIndex from '../components/post/PostIndex'

class BlogContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: false 
        }
    }

    componentDidMount() {
       this.props.getBlog()
       this.setState({
           visibility: true 
       }) 
    }

    render() {
        return (
            <div>
                <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>
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
                    </Transition>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>
                        <Grid.Row columns={3}>
                            <PostIndex posts={this.props.posts} />
                        </Grid.Row>
                    </Transition>             
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