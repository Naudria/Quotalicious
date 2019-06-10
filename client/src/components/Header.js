import React from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react'

const HomeHeader = () => {
  return(
    <div>
          <Header as='h2' icon textAlign='center'>
      <Icon circular color="violet" name="quote left" />
        Quotalicious!
      </Header>
			<Divider />
			</div>
  )
}

export default HomeHeader