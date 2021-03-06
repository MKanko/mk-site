import React from 'react'

import SkillDetail from './SkillDetail'

const SkillIndex = (props) => {

    const genSkills = props.skills.map(skill => <SkillDetail key={skill.id} skill={skill} />)

    return (
        <>
            {genSkills}
        </>
    )

}

export default SkillIndex