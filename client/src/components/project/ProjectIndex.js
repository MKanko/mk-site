import React from 'react'

import ProjectDetail from './ProjectDetail'

const ProjectIndex = (props) => {

    const genProjects = props.projects.map(project => <ProjectDetail key={project.id} project={project} />)

    return (
        <Grid.Row columns={3}>
            {genProjects()}
        </Grid.Row>
    )

}

export default ProjectIndex 