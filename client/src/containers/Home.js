import React from 'react'
import { Container, Message, Divider, Button } from 'semantic-ui-react'
import  ListsContainer  from '../containers/ListsContainer'
import  QuoteOfTheDay  from '../components/QuoteOfTheDay'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

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
        <Button fluid as={Link} to="/lists" color='violet' > View All Lists!</Button>
      </div>
    </Container>
  )

}

export default Home