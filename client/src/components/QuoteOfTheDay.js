import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import  { fetchQuoteOfTheDay } from '../actions/quoteActions'


class QuoteOfTheDay extends Component {
  //   constructor(props) {
  //   super(props)
  //   this.state = { quoteOfDay: true }
  // }

  componentDidMount() {
    this.props.fetchQuoteOfTheDay();

  }

  render() {
    const renderQuoteOfDay = () => {
      if (this.props.quoteOfDay) {
        return (
          <Container textAlign='center'>
            <Header as='h2'>
              "{this.props.quoteOfDay.body}"
              <Header.Subheader>{this.props.quoteOfDay.author}</Header.Subheader>
            </Header>
          </Container>
        )}
    }
        return (
          <div>{renderQuoteOfDay()}</div>
        )
      }
  }

  const mapStateToProps = (state) => {
    return {
      quoteOfDay: state.quotes.quoteOfDay
    }
}

export default connect(mapStateToProps, { fetchQuoteOfTheDay })(QuoteOfTheDay);