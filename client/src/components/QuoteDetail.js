import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Container, Icon, Label } from 'semantic-ui-react'
import  { selectQuote }  from '../actions/quoteActions'

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
      				<Item.Extra>
      						{this.props.selectedQuote.tags && this.props.selectedQuote.tags.map(tag => {
					  		 			return(
					  		 			<Label tag size='mini'>{tag}</Label>
					  		 			)
					  		 		})
					  			}
  						</Item.Extra>
      				</Item.Content>
      			</Item>
      			</Container>
          )
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

export default connect(mapStateToProps, selectQuote)(QuoteDetail)