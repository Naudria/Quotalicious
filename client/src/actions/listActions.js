import fetch from 'isomorphic-fetch'

	export const fetchLists = () => {
	  return (dispatch) => {
	    dispatch({ type: 'LOADING_LISTS' })
	    return fetch('/api/lists')
	    .then(response => {
	      return response.json()
	    }).then(lists => {
	      return dispatch({ type: 'FETCH_LISTS', payload: lists })
	    })
	  }
	}