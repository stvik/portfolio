import React, { Fragment } from 'react'
import { Image, Header, Container } from 'semantic-ui-react'


function Skills() {

	const header = "Skills"

	return (
	<>
		<Header as='h1' color='grey' textAlign='center'>{header}</Header>
		<Container>
	    	<Header as='h3' textAlign='center'>These are my skills</Header>
	    </Container>
	</>
	)
}

export default Skills