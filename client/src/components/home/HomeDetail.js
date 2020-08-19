import React from 'react'
import { Grid, Header, Segment, Image } from 'semantic-ui-react'

const HomeDetail = (props) => {

    return (
        <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' style={{color: '#0E15FA'}} textAlign='center'>
                    {this.props.title}
                </Header>
                {/* <Card centered style={{backgroundColor: 'grey' }}> */}
                    <Image src={process.env.PUBLIC_URL + this.props.image} />
                {/* </Card> */}
                <Segment inverted secondary>
                    {this.props.text_content}
                </Segment>
            </Grid.Column>           
        </Grid>
    )
}

export default HomeDetail