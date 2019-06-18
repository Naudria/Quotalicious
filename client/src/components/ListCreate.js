import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react'
import { createList } from '../actions/listActions'
import ListForm from './ListForm';

// Container. Changes state.

class ListCreate extends Component {

	onSubmit = formValues => {
		this.props.createList(formValues);
	}

	render () {
		return (
			<Container>
			<Header>Create a List</Header>
			<ListForm onSubmit={this.onSubmit} />
			</Container>
			);
	}
}


export default connect(null, { createList })(ListCreate);