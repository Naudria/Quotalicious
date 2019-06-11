import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

import  fetchQuotes  from '../actions/quoteActions'

class AllQuotes extends Component {
	componentDidMount() {
    this.props.fetchQuotes();
	}


	render() {
		if (this.props.allQuotes && this.props.currentList) {
    	return (
    		<div>
    			{this.props.allQuotes.map((quote, index) =>
    				<div key={quote.id}>
    				<div> {quote.author}
    				</div>
    				</div>
    				)}
    		</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
  return {
    allQuotes: state.quotes.allQuotes,
    currentList: state.user.currentList,
  }
}

export default connect(mapStateToProps, fetchQuotes)(AllQuotes)