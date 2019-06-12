import React, { Component } from 'react'
// import { removeQuoteFromUserFavorites } from '../actions/userActions'
import { bindActionCreators } from 'redux'
import { Container, Card, Button, Label } from 'semantic-ui-react'
import QuoteDetail from '../components/QuoteDetail'
import {connect} from 'react-redux'

class FavoriteQuotes extends Component {
  
  render() {
console.log(this.props)

  	if (this.props.currentList) {
        
        return (
        	<Container>
        		<Card.Group centered>
        			{this.props.currentList.favorites.map((quote, index) => 
        				<Card key={quote.id}>
        				<Card.Content>
        				  <Card.Header>{quote.author}</Card.Header>
                  <Card.Meta>
                    {this.props.currentList.favorites.tags && this.props.currentList.favorites.tags.map(tag => {
                      return(
                      <Label tag size='mini'>{tag}</Label>
                      )
                    })
                  }
                  </Card.Meta>
                  <Card.Description> {quote.body} </Card.Description>
        				</Card.Content>
        				<Card.Content extra>
        				 	<Button basic color='red'>
            				Remove quote
          				</Button>
        				</Card.Content>
        				</Card>
        				)}
        		</Card.Group>
        	</Container>
    )
    }   else {
      return(
      <div>Nothing</div>
      )
    } 
 	}
}

const mapStateToProps = (state) => {
  return {
    currentList: state.list.currentList,
  }
}

export default connect(mapStateToProps)(FavoriteQuotes)