import React from 'react'
// import { Transition } from 'semantic-ui-react'

import ProjectDetail from './ProjectDetail'

const ProjectIndex = (props) => {

    const genProjects = props.projects.map(project => <ProjectDetail key={project.id} project={project} />)

    return (
        <>{genProjects}</>                
    )
}

export default ProjectIndex 