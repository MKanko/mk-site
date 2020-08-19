import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAbout, getSkills } from '../actions'
import AboutDetail from '../components/about/AboutDetail'

class AboutContainer extends Component {

    componentDidMount() {
        this.props.getAbout()
        this.props.getSkills()
    }

    render() {
        return (
            <AboutDetail about={this.props.about} skills={this.props.skills} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        about: state.manageAbout.about,
        skills: state.manageSkills.skills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAbout: () => {dispatch(getAbout())},
        getSkills: () => {dispatch(getSkills())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)