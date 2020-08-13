import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment, Transition } from 'semantic-ui-react'

import { getAbout } from '../../actions'

class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.props.getAbout()
        this.setState({
            visible: true 
        })
    }

    render() {
        return (
            <div>              
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} visible={this.state.visible}> 
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h1' color='purple' textAlign='center'>
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