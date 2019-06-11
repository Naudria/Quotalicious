import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Container, Icon, Label, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import  { selectQuote }  from '../actions/quoteActions'
import { addQuoteToListFavorites } from '../actions/listActions'
import history from '../history';

class QuoteDetail extends Component {

  render() {


  	// Define the initial state of tags as [] before using map on it.
  	// Same as:
  	// constructor(props) {
			// super(props)
			//  this.state = {
			//   tags: []
			//   }
			// } 	 		

  	const renderQuoteDetail = () => {
        if (this.props.selectedQuote) {
          return (

          	<Container textAlign='center'>
          	  <Item >
      				<Item.Content >
      				<Item.Header as='h3'>{this.props.selectedQuote.body} </Item.Header>
      				<Item.Description>{this.props.selectedQuote.author}</Item.Description>
      				<br />
      				<Item.Extra>

      						{this.props.selectedQuote.tags && this.props.selectedQuote.tags.map(tag => {
					  		 			return(
					  		 			<Label tag size='mini'>{tag}</Label>
					  		 			)
					  		 		})
					  			}

  						</Item.Extra>
  						<br />
  					<Button onClick={() => this.props.addQuoteToListFavorites(this.props.selectedQuote, this.props.currentList)}>
  					Add to List Faves
  					</Button>
  					
      				</Item.Content>
      			</Item>
      			</Container>
          )
      	} else {
      		return null
      	}
    }

  	return (
  	<div>{renderQuoteDetail()}</div>
  	)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedQuote: state.quotes.selectedQuote,
    currentList: state.list.currentList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

  addQuoteToListFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetail)