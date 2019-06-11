import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import  { selectQuote }  from '../actions/quoteActions'

class QuoteDetail extends Component {

  render() {

  	const renderQuoteDetail = () => {
        if (this.props.selectedQuote) {
          return (
          	<Card>
      				<Card.Content>
      				<Card.Header>{this.props.selectedQuote.author}</Card.Header>
      				</Card.Content>
      			</Card>
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