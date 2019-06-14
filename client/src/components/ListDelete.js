import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Modal from '../Modal';
// import history from '../../history';
import { deleteList } from '../actions/listActions';

class ListDelete extends Component {



    render(){
        const id = this.props.currentList
        if (this.props.currentList)

        return (
            <React.Fragment>
                <button className="ui button negative"
                onClick={() => this.props.deleteList(id)}>Delete</button>
                <Link className="ui button" to="/">Cancel</Link>
            </React.Fragment>
        );
    }

    
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentList: state.list.currentList
    };
};

export default connect(mapStateToProps,{
   deleteList })(ListDelete);