import React, { Fragment } from 'react';
import { Header, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


function Homepage() {
  return (
  <>
  	<div className='headerContainer'>
  		<Header inverted className='nameHeader'>Sara Tarnvik</Header>
  		<Header size='huge' color='grey' textAlign='center' inverted>Full-Stack Software Engineer</Header>

  		<div  style={{paddingTop:'2vh'}}>
  			<a href='https://github.com/stvik' target='_blank' style={{paddingRight:'2vw'}}>
  				<Icon circular inverted link name='github' size='big'/>
  			</a>
  			<a href='https://www.linkedin.com/in/sara-tarnvik/' target='_blank'>
  				<Icon circular link inverted name='linkedin' size='big'/>
  			</a>
  		</div>
  	</div>
  	<div className='footer'>
  		<Icon link inverted size='huge' name='angle down'/>
  	</div>


  	</>

  )
}

export default Homepage;