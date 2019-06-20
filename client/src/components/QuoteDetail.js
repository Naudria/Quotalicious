import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Container, Label, Button, Popup } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { addQuoteToListFavorites } from '../actions/listActions'

// An actual container component that holds state


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

        <Container textAlign='center' key={this.props.selectedQuote.id}>
            <Item >
              <Item.Content >
                <Item.Header as='h3'>{this.props.selectedQuote.body} </Item.Header>
                <Item.Description>{this.props.selectedQuote.author}</Item.Description>
                  <br />
                <Item.Extra >

                {this.props.selectedQuote.tags && this.props.selectedQuote.tags.map(tag => {
                return(
                <Label tag size='mini' key={this.props.selectedQuote.id}>{tag}</Label>
                )
                })
            }

            </Item.Extra>
            <br />
              <Popup
              trigger={<Button basic color='violet' onClick={() => this.props.addQuoteToListFavorites(this.props.selectedQuote, this.props.currentList)} content="Add to Faves"/>}
              content={`Added!`}
              on='click'
              position='top right'
              />

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