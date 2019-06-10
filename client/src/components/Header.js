import React from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react'

const HomeHeader = () => {
  return(
    <div>
          <Header as='h2' icon textAlign='center'>
      <Icon name="quote left circular violet" />
        Quotalicious!
      </Header>
			<Divider />
			</div>
  )
}

export default HomeHeader