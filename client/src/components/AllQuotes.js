import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, Button, Divider, Label, Icon, Header, Segment, Popup } from 'semantic-ui-react'
import  fetchQuotes  from '../actions/quoteActions'
import { selectQuote }  from '../actions/quoteActions'
import QuoteDetail from './QuoteDetail'

class AllQuotes extends Component {

  componentDidMount() {
    this.props.fetchQuotes();
  }

    render() {
      if (this.props.allQuotes && this.props.currentList) {
        return (
          <div>
            <Header as='h2'>
            <Icon name='list alternate' />
              <Header.Content>
              You are in Your "{this.props.currentList.title}" List
              </Header.Content>
            </Header>
            {this.props.allQuotes.map((quote, index) =>
            <List key={quote.id}>
              <List.Item >
                <List.Content floated='right'>
                <Popup
              trigger={<Button color="violet" onClick={() => this.props.selectQuote(quote)}content="View Quote"/>}
              content={<QuoteDetail />}
              on='click'
              position='top right'
              />
                
                </List.Content>

                <List.Content key={quote.id}>
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

// Check

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