import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment } from 'semantic-ui-react'

import { getHome } from '../../actions'

class Home extends Component {

    componentDidMount() {
        this.props.getHome()
    }

    render() {
        return (
            <>              
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header as='h1' color='green' textAlign='center'>
                        {this.props.title}
                    </Header>
                    <Segment inverted secondary>
                        {this.props.text_content}
                    </Segment>
                </Grid.Column>           
            </>
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

