import React, { Component } from 'react'
import { Transition, Grid, Container } from 'semantic-ui-react'

class PageEffect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.setState({
            visible: true 
        })
    }

    render() {
        return (
            <Transition animation={this.props.animation} duration={this.props.duration} visible={this.state.visible} unmountOnHide={true} >      
                <Container>
                    <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                            {this.props.children}
                    </Grid>
                </Container>
            </Transition>
        )
    }


}

PageEffect.defaultProps = {
    animation: 'drop',
    duration: 2500
}

export default PageEffect