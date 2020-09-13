import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import { getAbout, getSkills } from '../actions'
import AboutDetail from '../components/about/AboutDetail'
import ResourceIndex from '../components/common/ResourceIndex'
import SkillDetail from '../components/skill/SkillDetail'
import './About.css'

class AboutContainer extends Component {

    componentDidMount() {
        this.props.getAbout()
        this.props.getSkills()
    }

    render() {
        console.log('aboutCon:', this.props.skills)
        return (
            <>
                <AboutDetail about={this.props.about} skills={this.props.skills} />
                <Grid id="resource-index-grid">              
                    <ResourceIndex resourceList={this.props.skills} resourceName='skill' rowSize={4}>
                        <SkillDetail />
                    </ResourceIndex>   
                </Grid>
            </>
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