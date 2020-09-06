import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import CategoryDetail from '../components/category/CategoryDetail'
import ResourceIndex from '../components/common/ResourceIndex'
import { getResume } from '../actions'

class ResumeContainer extends Component {

    componentDidMount() {
        this.props.getResume()
    }

    render() {

        const resume = '/images/MKanko Resume.pdf'
        const cert = '/images/flatiron certification.pdf'
        const aws = 'https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2020-02-17&ci=AWS01231487'

        return (
            <Grid divided='vertically' textAlign='center' style={{padding: '40px'}}>
                <Grid.Row columns={1}>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        <MDEditor.Markdown source={this.props.text_content} style={{color: 'white'}} /><br></br>                                                                       
                        <Button style={{textAlign: 'center'}} size='mini'color='grey' href={resume} target='_blank' rel='noopener noreferrer'>Download Resume</Button>
                        <Button style={{textAlign: 'center'}} size='mini'color='grey' href={cert} target='_blank' rel='noopener noreferrer'>Flatiron Certification</Button>
                        <Button style={{textAlign: 'center'}} size='mini'color='grey' href={aws} target='_blank' rel='noopener noreferrer'>AWS Certification</Button>
                    </Grid.Column>           
                </Grid.Row>                 
                <ResourceIndex resourceList={this.props.categories} resourceName='category' rowSize={2}>
                    <CategoryDetail />
                </ResourceIndex> 
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, description, text_content, secondary_text_content, categories } = state.manageResume.resume 
    return {
        title: title,
        description: description,
        text_content: text_content,
        secondary_text_content: secondary_text_content,
        categories: categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getResume: () => {dispatch(getResume())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer)