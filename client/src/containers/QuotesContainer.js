import React, { Component } from 'react'
import AllQuotes from '../components/AllQuotes';
import Header from '../components/Header'

import {connect} from 'react-redux'

const QuotesContainer = () => {

    return (
      <div>
      	<div>
          <Header/>
        </div>
        <div >

            <AllQuotes />
        </div>
      </div>
          
           
          
    )
  }


export default QuotesContainer