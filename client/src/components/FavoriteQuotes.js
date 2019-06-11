import React, { Component } from 'react'
import { removeQuoteFromUserFavorites } from '../actions/userActions'
import { bindActionCreators } from 'redux'
import QuoteDetail from '../components/QuoteDetail'
import {connect} from 'react-redux'

class FavoriteQuotes extends Component {
  
  render() {
console.log(this.props)

  	return (
  		<div>hi</div>
  		)
 	}
}
