import React, { Component } from 'react'

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayPhrase: ''
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                displayPhrase: this.props.phrase 
            })
        }, 4000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>{this.state.displayPhrase}</h1>
            </div>
        )
    }

}

export default Carousel 