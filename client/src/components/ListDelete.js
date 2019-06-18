import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../history';
import { Grid, Button, Divider, Card } from 'semantic-ui-react'
import { deleteList } from '../actions/listActions';
// import { fetchLists }  from '../actions/listActions'
import { setList }  from '../actions/listActions'

// Container; changes state

class ListDelete extends Component {
	componentDidMount(){
		this.props.setList()
	}

//  handleChange(event) {
//  // console.log(event.target.value)
//  this.props.setList(event.target.value)
// }


	renderActions() {
		const chosenlist = this.props.currentList
		return (
			<React.Fragment>
			<Button  basic color="red"
			onClick={() => this.props.deleteList(chosenlist)} >Delete</Button>
			<Button as Link to="/">Cancel</Button>
			</React.Fragment>
		)
	}

	renderContent(){
		if(!this.props.currentList){
			return <p>Are you sure you want to delete this stream?</p>;
		}
	}

	render(){
	return (
	<Modal
	title="Delete List"
	content={this.renderContent()}
	actions={this.renderActions()}
	onDismiss={() => history.push('/')}
	/>
	);
	}
	}

	const mapStateToProps = (state) => {
	return {
	currentList: state.list.currentList
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
deleteList,
// fetchLists,
setList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) ( ListDelete);