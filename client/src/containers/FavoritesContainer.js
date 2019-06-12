import React, { Component } from 'react'
import { selectQuote } from '../actions/quoteActions'
import FavoriteQuotes from '../components/FavoriteQuotes';
import Header from '../components/Header'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Grid, Divider, Container } from 'semantic-ui-react'

const FavoritesContainer = () => {

    <Container style={{ marginTop: '30px' }}>
                <Header />
                <Divider />
                <Grid columns={3} stackable padded>
                    <Grid.Column>
                        <FavoriteQuotes />
                    </Grid.Column>
                    
                </Grid>
            </Container>
    )
  }


export default FavoritesContainer