import React, { Fragment } from 'react'
import { Image, Header, Container, Divider, Item } from 'semantic-ui-react'


function Education() {
  return (
    <>
    	<Header size='huge' color='violet' textAlign='center'>Education</Header>
    	<Container >
          <Item.Group relaxed='very'>
            <Item>
              <Item.Image src='https://pbs.twimg.com/profile_images/1149340751265980417/s0j8V4p3.png' size='tiny'/>
              <Item.Content verticalAlign='middle'>
                <Item.Header><a href='https://flatironschool.com/' target='_blank'>Flatiron School</a></Item.Header>
                <Item.Description>Software Engineering | February 2020</Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src='https://toppng.com/uploads/preview/virginia-tech-logo-virginia-polytechnic-institute-and-state-university-11562993168yw08rna7y3.png' size='tiny'/>
              <Item.Content verticalAlign='middle'>
                <Item.Header><a href='https://www.ise.vt.edu/' target='_blank'>Virginia Polytechnic Institute and State University</a></Item.Header>
                <Item.Description>B.S. Industrial & Systems Engineering | Minor in Green Engineering | May 2016</Item.Description>
                </Item.Content>
            </Item>
          </Item.Group>
	    </Container>
    </>
  )
}

export default Education