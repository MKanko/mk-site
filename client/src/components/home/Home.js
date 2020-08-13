import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment, Transition } from 'semantic-ui-react'

import { getHome } from '../../actions'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.props.getHome()
        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} visible={this.state.visible}> 
                        <Grid.Column style={{ maxWidth: 600 }}>
                            <Header as='h1' color='green' textAlign='center'>
                                {this.props.title}
                            </Header>
                            <Segment inverted secondary>
                                {this.props.text_content}
                            </Segment>
                        </Grid.Column>
                    </Transition>
                </Grid>            
            </div>
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

