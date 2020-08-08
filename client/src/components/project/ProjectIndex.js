import React from 'react'
import { Grid } from 'semantic-ui-react'

// import ProjectDetail from './ProjectDetail'

const ProjectIndex = (props) => {

    // const genProjects = props.projects.map(project => <ProjectDetail key={project.id} project={project} />)

    return (
        <Grid.Row columns={3}>
            <h2 style={{color: 'green'}}>Project</h2>
        </Grid.Row>
    )

}

export default ProjectIndex 