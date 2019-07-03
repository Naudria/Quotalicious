import React, { Component } from 'react'
import { removeQuoteFromListFavorites } from '../actions/listActions'
import { bindActionCreators } from 'redux'
import { Container, Card, Button, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import QuoteUpvote from '../components/QuoteUpvote'

class FavoriteQuotes extends Component {

 
  render() {
    console.log(this.props)

    if (this.props.currentList) {

      return (
        <Container>
          <Header as='h2'>
          <Icon name='list alternate' />
          <Header.Content>
          You are in Your "{this.props.currentList.title}" List
          </Header.Content>
          </Header>
            <Card.Group>
            {this.props.currentList.favorites.map((quote, index) =>
            <Card key={quote.id}>
              <Card.Content>
              <Card.Header>{quote.author}</Card.Header>

              <Card.Description> {quote.body} </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <Button.Group>
              <Button onClick={() => this.props.removeQuoteFromListFavorites(quote, this.props.currentList)}>
              Remove Quote
              </Button>
              <Button.Or />
              <QuoteUpvote />
              </Button.Group>
              </Card.Content>
            </Card>
            )}
            </Card.Group>
        </Container>
      )
    }  else {
      return(
       <div>You must select a list first!</div>
      )
    }
  }
}

// react doc = thinking in react
// async - promises

const mapStateToProps = (state) => {
  return {
  currentList: state.list.currentList,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
removeQuoteFromListFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteQuotes)