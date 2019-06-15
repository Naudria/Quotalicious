import React from 'react'
import { Container, Message, Divider } from 'semantic-ui-react'
import  AllLists  from '../components/AllLists'
import Header from '../components/Header'

const ListContainer = () => {

	return (
		<Container>
			<div>
				<Header/>
			</div>

			<div>
				<AllLists/>
			</div>
		</Container>
	)

}

export default ListContainer