import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Container, Label, Button, Popup, Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { addQuoteToListFavorites } from '../actions/listActions'

class QuoteDetail extends Component {

  render() {

    const renderQuoteDetail = () => {
      if (this.props.selectedQuote) {
        return (
          <Segment textAlign='center'>
        
            <Item key={this.props.selectedQuote.id}>
              <Item.Content >
                <Item.Header as='h3'>{this.props.selectedQuote.body} </Item.Header>
                <Item.Description>{this.props.selectedQuote.author}</Item.Description>
                  <br />
                <Item.Extra key={this.props.selectedQuote.id} >

                {this.props.selectedQuote.tags && this.props.selectedQuote.tags.map(tag => {
                return(
                <Label tag size='mini' key={tag.id}>{tag}</Label>
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
       
          </Segment>
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