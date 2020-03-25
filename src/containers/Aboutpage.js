import React, { Fragment } from 'react'
import { Image, Header, Container } from 'semantic-ui-react'


function Aboutpage() {

	const header = "Hello, I'm Sara"
	const bio = "I am a full-stack software engineer experienced in JavaScript, React, and Ruby on Rails, with a background in software application support, customer service and analytics. Personable and reliable, with excellent team management and customer interaction skills. Prior education in industrial and systems engineering with a focus on sustainability. In my free time I enjoy traveling, hiking, and biking."

	return (
	<>
		<Image src='https://miro.medium.com/max/3150/2*UAedSBzj368D-b3Nw5UpNw.jpeg' circular className='profileImage' centered/>
		<Header as='h1' color='grey' textAlign='center'>{header}</Header>
		<Container>
	    	<Header as='h3' textAlign='center'>{bio}</Header>
	    </Container>
	</>
	)
}

export default Aboutpage