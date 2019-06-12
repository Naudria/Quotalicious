import React, { Component } from 'react'
import { selectQuote } from '../actions/quoteActions'
import FavoriteQuotes from '../components/FavoriteQuotes';
import Header from '../components/Header'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Grid, Divider, Container } from 'semantic-ui-react'

// Not a actual container component; reusable and presentational

const FavoritesContainer = () => {
		return (
    <Container style={{ marginTop: '30px' }}>
                <Header />
                <Divider />
                <Grid >
                    <Grid.Column>
                        <FavoriteQuotes />
                    </Grid.Column>
                    
                </Grid>
            </Container>
    )
  }


export default FavoritesContainer