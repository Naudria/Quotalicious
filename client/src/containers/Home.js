import React from 'react'
import { Container, Message, Divider } from 'semantic-ui-react'
import  AllLists  from '../components/AllLists'
import  QuoteOfTheDay  from '../components/QuoteOfTheDay'
import Header from '../components/Header'

// Not a actual container component; reusable and presentational

const Home = () => {

    return (
      <Container>
        <div>
          <Header/>
        </div>
        <Message floating>
        <QuoteOfTheDay />
     		</Message>
     		<div>
          <AllLists/>
        </div>
      </Container>
      )

}

export default Home