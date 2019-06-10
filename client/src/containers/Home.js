import React, { Component } from 'react'
import {connect} from 'react-redux'
import  AllLists  from '../components/AllLists'
// import Header from '../components/Header'


const Home = () => {

    return (
      <div>
        {/*<div>
          <Header/>
        </div>*/}
        
        <div className="column">
          <AllLists/>
        </div>
      </div>
      )

}

export default Home