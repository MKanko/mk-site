import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAbout } from '../actions'

class AboutContainer extends Component {

    componentDidMount() {
        this.props.getAbout()
    }

    render() {
        return (
            <AboutDetail about={this.props.about} />
        )
    }

}

const mapStateToProps = (state) => {
    return {about: state.manageAbout.about}
}

const mapDispatchToProps = (dispatch) => {
    return {getAbout: () => {dispatch(getAbout())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)