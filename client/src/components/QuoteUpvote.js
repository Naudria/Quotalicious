import React, { Component } from 'react'
import { Item, Label, Button } from 'semantic-ui-react'

class QuoteUpvote extends Component {

  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <Button color='red'
	      content='Like'
	      icon='heart'
	      label={{ basic: true, color: 'red', pointing: 'left', content: this.state.count}}
	      onClick={this.handleClick}/>
      </div>
    )
  }
}

export default QuoteUpvote

