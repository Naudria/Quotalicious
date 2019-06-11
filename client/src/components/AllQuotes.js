import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { List, Button, Divider, Label, Icon } from 'semantic-ui-react'
import  fetchQuotes  from '../actions/quoteActions'
import { selectQuote }  from '../actions/quoteActions'
import history from '../history';

class AllQuotes extends Component {
  
	componentDidMount() {
    this.props.fetchQuotes();
	}


	render() {
		if (this.props.allQuotes && this.props.currentList) {
    	return (
    		<div>
    			{this.props.allQuotes.map((quote, index) =>
    				 <List divided verticalAlign='middle'>
					    <List.Item key={quote.id}>
					      <List.Content floated='right'>
					        <Button color="violet" onClick={() => this.props.selectQuote(quote)}>Select Quote</Button>
					      </List.Content>
								
								<List.Content>
									<Icon name="quote left" />{quote.body}
								</List.Content>
					      <List.Content>
									<Label pointing>{quote.author}</Label>
    						</List.Content>
 		   				</List.Item>
 		   				<Divider />
 		   				</List>
    				)}
    		</div>
			)
		} else {
      return (

      <div>You must select a list first!</div>

 
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
	selectQuote,
  fetchQuotes
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllQuotes)