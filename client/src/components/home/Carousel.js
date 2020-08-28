import React, { Component } from 'react'

import { Transition, Header, Container } from 'semantic-ui-react'

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayPhrase: 'Committment',
            index: 0,
            visible: true,
        }
    }

    componentDidMount() {
        this.visibilityOff()
        this.interval = setInterval(() => {
            this.switchPhrase()
            this.visibilityOff() 
        }, 5000)
    }

    visibilityOff = () => {
        setTimeout(() => {
            this.setState({
                ...this.state, visible: false 
            })
        }, 3000)
    }

    switchPhrase = () => {
        let index = this.state.index + 1
        index = this.props.displayPhrases.length === index ? 0 : index 
        
        this.setState({
            displayPhrase: this.props.displayPhrases[index],
            index: index,
            visible: true 
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <Container> 
                <Transition animation={'horizontal flip'} duration={2000} visible={this.state.visible}>                                              
                        <Header as='h1' style={{color: 'white'}} textAlign='center'>                   
                            {this.state.displayPhrase}                  
                        </Header>                  
                </Transition>
            </Container>                         
        )
    }

}

export default Carousel 