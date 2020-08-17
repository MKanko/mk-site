import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

import { getHome } from '../../actions'

class Home extends Component {

    componentDidMount() {
        this.props.getHome()
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
    // console.log('state: ', state)
    return {
        title: state.manageHome.home.title,
        text_content: state.manageHome.home.text_content,
        image: state.manageHome.home.image 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getHome: () => {dispatch(getHome())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

