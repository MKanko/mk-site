import React from 'react' 
import { Grid, Header, Image, Segment } from 'semantic-ui-react'

import SkillIndex from '../skill/SkillIndex'

const AboutDetail = (props) => {

    return (
        <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' style={{color: '#0E15FA'}} textAlign='center'>
                        {props.about.title}
                    </Header>
                    {/* <Card centered style={{backgroundColor: 'grey' }}> */}
                        <Image src={process.env.PUBLIC_URL + props.about.image} />
                    {/* </Card> */}
                    <Segment inverted secondary>
                        {props.about.text_content}
                    </Segment>
                </Grid.Column>about
            </Grid.Row>
            <Grid.Row>                    
                {/* <Header as='h1' style={{color: '#0E15FA'}} textAlign='center'>Skills</Header>                       */}
                <SkillIndex getSkills={props.skills.getSkills} skills={props.skills} />                                                          
            </Grid.Row>               
        </Grid> 
    )

}

export default AboutDetail