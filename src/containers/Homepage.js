import React, { Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react'


function Homepage() {
  return (
  	<div className='headerContainer'>
  		<Header size='huge' inverted className='nameHeader'>Sara Tarnvik</Header>
  		<div>
  			<Icon circular name='github' size='big'/>
  			<Icon circular name='linkedin' size='big'/>
  		</div>
  	</div>

  );
}

export default Homepage;