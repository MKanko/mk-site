import React from 'react' 
import { Grid, Header, Image, Card } from 'semantic-ui-react'

import SkillIndex from '../skill/SkillIndex'

const AboutDetail = (props) => {

    return (
        <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                        {props.about.title}
                    </Header>
                    <Card centered style={{backgroundColor: 'grey' }}>
                        <Image src={process.env.PUBLIC_URL + props.about.image} />
                    </Card>
                                      
                    {/* <Segment inverted secondary></Segment> */}
                    <h4 style={{color: 'white'}}>{props.about.text_content}</h4>                   
                </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row as={Header} style={{color: '#DBCE07', margin: 0, padding: 0, height: '30px'}}> 
                Skills                   
            </Grid.Row> */}
            {/* <Grid.Row as={Container} textAlign={'center'}>                   
                    <Header as={'h2'} textAlign={'center'} style={{color: '#DBCE07', padding: 0, margin: 0}}>Skills</Header>
                    <Grid container textAlign={'center'} verticalAlign={'middle'}>                     
                        <SkillIndex getSkills={props.skills.getSkills} skills={props.skills} />
                    </Grid>                                                           
            </Grid.Row> */}
             <SkillIndex getSkills={props.skills.getSkills} skills={props.skills} />
        </Grid> 
    )

}

export default AboutDetail