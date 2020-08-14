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

    componentWillUnmount() {
        console.log('hit')
    }

    render() {
        return (
            <Transition animation={'drop'} duration={2500} visible={this.state.visible} unmountOnHide={true} >      
                <Container>
                    <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                            {this.props.children}
                    </Grid>
                </Container>
            </Transition>
        )
    }


}

export default PageEffect