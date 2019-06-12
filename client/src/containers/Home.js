import React from 'react'
import { Container } from 'semantic-ui-react'
import  AllLists  from '../components/AllLists'
import Header from '../components/Header'

// Not a actual container component; reusable and presentational

const Home = () => {

    return (
      <Container>
        <div>
          <Header/>
        </div>
        
     
          <AllLists/>
        
      </Container>
      )

}

export default Home