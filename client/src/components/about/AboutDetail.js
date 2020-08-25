import React from 'react' 
import { Grid, Header, Image, Card } from 'semantic-ui-react'

import SkillIndex from '../skill/SkillIndex'

const AboutDetail = (props) => {

    return (
        <Grid container textAlign='center' verticalAlign='middle' style={{marginTop: "12vh"}}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                        {props.about.title}
                    </Header>
                    <Card centered style={{backgroundColor: 'grey' }}>
                        <Image src={process.env.PUBLIC_URL + props.about.image} />
                    </Card>
                    <h4 style={{color: 'white', height: '34vh'}}>
                        {props.about.text_content}                 
                    </h4>                   
                </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign={'center'}>                   
                    <Grid container textAlign={'center'} verticalAlign={'middle'} style={{height: '8vw'}}> 
                        <Grid.Row style={{height: '3vw'}}>
                            <Header as={'h3'} textAlign={'center'} style={{color: '#DBCE07', padding: 0, margin: 0}}>Skills</Header>  
                        </Grid.Row>     
                        <Grid.Row style={{height: '5vw'}}>
                            <SkillIndex getSkills={props.skills.getSkills} skills={props.skills} />
                        </Grid.Row>            
                    </Grid>                                                           
            </Grid.Row>
        </Grid> 
    )

}

export default AboutDetail