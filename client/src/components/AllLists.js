import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Select, Segment, Header, Grid } from 'semantic-ui-react'

import { fetchLists }  from '../actions/listActions'
import { setList }  from '../actions/listActions'

class AllLists extends Component {
	 componentDidMount() {
    this.props.fetchLists()
  }

    handleChange(event) {
    console.log(event.target.value)
    this.props.setList(event.target.value)
  }

	render() {
	
    const mapListsForDropdown = this.props.allLists.map((list, index) => {
    	return (
        <option value={list.id} key={list.id} id={list.id}>
          {list.title}
        </option>
      )
    })

    const ListInfo = () => {
      console.log(this.props.currentList)
      if (this.props.currentList) {
        const chosenlist = this.props.currentList
        return (
              <Header as='h2' textAlign='center'>{chosenlist.title}
             	 <Header.Subheader>{chosenlist.description}</Header.Subheader>
           	  </Header>  
        )
      }
    }



	    return (
	    	<div>
	    	  <Grid celled>
				    <Grid.Row>
				      <Grid.Column width={15}>
				      <div className="ui centered card">
				   			<select onChange={(e) => this.handleChange(e)}>  
							    <option value="">Select a List</option>
							    {mapListsForDropdown} 
				 				</select>
				 				</div>
				 				</Grid.Column>
				    </Grid.Row>

		    	 <Grid.Row>
		      	<Grid.Column width={15}>
		    		<div>{ListInfo()}</div>
		    		</Grid.Column>
		    	 </Grid.Row>
		    		 </Grid>
		    	</div>
	    	)
  }
}


const mapStateToProps = (state) => {
  return {
    allLists: state.list.allLists,
    currentList: state.list.currentList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchLists,
  setList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) ( AllLists);
