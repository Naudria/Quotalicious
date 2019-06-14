import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/listActions'
import { Field, reduxForm } from 'redux-form';
// import ListForm from './ListForm';

class ListCreate extends Component {

	// onSubmit = formValues => {
	// 	this.props.createList(formValues);
	// }

	render () {
		return (
			<div>
			<h3>Create a List</h3>
			{/*<ListForm onSubmit={this.onSubmit} />*/}
			</div>
			);
	}
}

export default reduxForm({
	form: 'list',

})(ListCreate);

// export default connect(null, { createList })(ListCreate);