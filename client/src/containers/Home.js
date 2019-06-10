import React from 'react'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'
import  AllLists  from '../components/AllLists'
import Header from '../components/Header'


const Home = () => {

    return (
      <div>
        <div>
          <Header/>
        </div>
        
       <Grid centered columns={6}>
      <Grid.Column>
          <AllLists/>
        </Grid.Column>
        </Grid>
      </div>
      )

}

export default Home