import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SkillMenuDetail = (props) => {
console.log('smd props:', props)
    return (
        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
            <Card as={Link} to={{pathname: '/skill/edit', query: {skill: props.skill.attributes, editSkill: props.editSkill}}}>
                <Image src={process.env.PUBLIC_URL + props.skill.attributes.image} />
                <Card.Content>
                    <Card.Header>{props.skill.attributes.name}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default SkillMenuDetail