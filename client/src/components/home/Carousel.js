import React, { Component } from 'react'

import { Transition, Header } from 'semantic-ui-react'

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayPhrase: 'Full Stack Software Developer',
            index: 0
        }
        
    }

    switchPhrase = () => {
        let index = this.state.index + 1
        index = this.props.displayPhrases.length === index ? 0 : index 
        
        this.setState({
            displayPhrase: this.props.displayPhrases[index],
            index: index  
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.switchPhrase() 
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return ( 
            <Transition animation={'horizontal flip'} duration={2500}>         
                <Header as='h1' color='green' textAlign='center'>                   
                    {this.state.displayPhrase}                  
                </Header>
            </Transition>        
        )
    }

}

export default Carousel 