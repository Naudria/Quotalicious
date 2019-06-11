import React, { Component } from 'react'
import AllQuotes from '../components/AllQuotes';
import QuoteDetail from '../components/QuoteDetail'
import Header from '../components/Header'
import { Grid, Divider, Container } from 'semantic-ui-react'
import {connect} from 'react-redux'

const QuotesContainer = () => {

    return (
      <div>
      	<div>
          <Header/>
        </div>
        <Divider />
          <Container>
          <Grid columns='equal'>
          <Grid.Column width={10}>
           
            <AllQuotes />
           
          </Grid.Column>

           <Grid.Column width={6}>
           
            <QuoteDetail />
           
          </Grid.Column>
          </Grid>
          </Container>
      </div>
          
           
          
    )
  }


export default QuotesContainer