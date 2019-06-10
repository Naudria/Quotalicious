import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'semantic-ui-react'

import { fetchLists }  from '../actions/listActions'

class AllLists extends Component {
	 componentDidMount() {
    this.props.fetchLists()
  }

	render() {
	
    const mapListsForDropdown = this.props.allLists.map((list, index) => {
      return (
      	<div>
        <option value={list.id} key={list.id} id={list.id}>
          {list.title}
        </option>
        </div>
      )

    })


    return (
    	<Select placeholder='Select A List' options={mapListsForDropdown} />

    	)
  }
}


const mapStateToProps = (state) => {
  return {
    allLists: state.list.allLists,
  }
}

export default connect(mapStateToProps, { fetchLists }) ( AllLists);
