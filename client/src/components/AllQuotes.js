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
		} else {
      return (

      <div>Nothing</div>

 
      )

     
    }
	}
}

const mapStateToProps = (state) => {
  return {
    allQuotes: state.quotes.allQuotes,
    currentList: state.list.currentList,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchQuotes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllQuotes)