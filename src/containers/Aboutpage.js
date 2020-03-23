import React, { Fragment } from 'react'
import { Image, Header } from 'semantic-ui-react'


function Aboutpage() {
  return (
    <>
    	<Image src='https://miro.medium.com/max/3150/2*UAedSBzj368D-b3Nw5UpNw.jpeg' circular className='profileImage' centered/>
    	<Header as='h1' color='grey' textAlign='center'>Hello, I'm Sara</Header>
    	
    </>
  )
}

export default Aboutpage