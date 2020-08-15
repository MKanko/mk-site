import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

import { getAbout } from '../../actions'

class About extends Component {

    componentDidMount() {
        this.props.getAbout()
    }

    render() {
        return (
            <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='green' textAlign='center'>
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

}

const mapStateToProps = (state) => {
    console.log('state:', state)
    return {
        title: state.manageAbout.about.title,
        text_content: state.manageAbout.about.text_content,
        image: state.manageAbout.about.image 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getAbout: () => {dispatch(getAbout())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)