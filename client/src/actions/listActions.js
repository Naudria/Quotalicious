import fetch from 'isomorphic-fetch'

// import axios from 'axios';
import history from '../history';
import  AllLists  from '../components/AllLists'



export const createList = (formValues) => {
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ list: formValues })
  }

  return dispatch => {
    fetch (`/api/lists`, data)
      .then(response => response.json())
      .then(list => dispatch({
        type: 'CREATE_LIST',
        payload: list
      }))
  }

}
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

	export const setList = id => {
  console.log(id)
  let data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch (`/api/lists/${id}`, data)
    .then(response => {
      return response.json()
    }).then (list => {
      return dispatch({
        type: 'SET_LIST',
        payload: list
      })
    })
  }
}

export const deleteList = list => {


  return dispatch => {
    fetch ('/api/lists/' + list.id, {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => dispatch({ type: 'DELETE_LIST', payload: list }));
    }

};

export const addQuoteToListFavorites = (selectedQuote, list) => {
  let id = list.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quote: selectedQuote })
  }

  return dispatch => {
    fetch (`/api/lists/${id}/add_to_favorites`, data)
      .then(response => response.json())
      .then(quotes => dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: quotes
      }))
  }
}

export const removeQuoteFromListFavorites = (selectedQuote, list) => {
  let id = list.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quote: selectedQuote })
  }

  return dispatch => {
    fetch (`/api/lists/${id}/remove_from_favorites`, data)
      .then(response => response.json())
      .then(quotes => dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: quotes
      }))
  }
}
