import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLists }  from '../actions/listActions'

class AllLists extends Component {

	render() {
		return <div>All Lists</div>
		}
}

export default connect(null, { fetchLists }) ( AllLists);
