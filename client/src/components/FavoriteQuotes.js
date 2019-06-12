import React, { Component } from 'react'
import { removeQuoteFromUserFavorites } from '../actions/userActions'
import { bindActionCreators } from 'redux'
import { Container, Card } from 'semantic-ui-react'
import QuoteDetail from '../components/QuoteDetail'
import {connect} from 'react-redux'

class FavoriteQuotes extends Component {
  
  render() {
console.log(this.props)

  	if (this.props.currentUser) {
        
        return (
        	<Container>
        		<Card.Group centered>
        			{this.props.currentList.favorites.map((quote, index) => 
        				<Card key={quote.id}>
        				<Card.Content>
        				{quote.author}
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
    }    
 	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  }
}

export default connect(mapStateToProps)(FavoriteQuotes)