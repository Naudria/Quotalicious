import React from 'react'
import {connect} from 'react-redux'
import { Container } from 'semantic-ui-react'
import  AllLists  from '../components/AllLists'
import Header from '../components/Header'


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