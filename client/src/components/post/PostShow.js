import React from 'react'
import {Grid, Header, Segment, Transition} from 'semantic-ui-react'

const PostShow = (props) => {
console.log('show props:', props)
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Transition animation={'drop'} duration={2000} transitionOnMount>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h1' color='green' textAlign='center'>
                            {props.location.query.post.title}
                        </Header>
                        <Segment inverted secondary>
                            {props.location.query.post.text_content}
                        </Segment>
                    </Grid.Column>
                </Transition>
                </Grid>
        </div>
    )

}

export default PostShow

