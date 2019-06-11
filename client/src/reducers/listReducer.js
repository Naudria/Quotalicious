const initialState = {
  loading: false,
  allLists: [],
  currentList: null
}

export default function listReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_LISTS':
      return { ...state, loading: true}
    case 'FETCH_LISTS':
      return { ...state, loading: false, allLists: action.payload}
    case 'RETRIEVING_SELECTED_LIST':
      return { ...state, loading: true }
    case 'SET_LIST':
      return { ...state, currentList: state.allLists.find(list => list.id === action.payload.id) }
    case 'ADD_TO_FAVORITES':
      return { ...state, currentList: {...state.currentList, favorites: action.payload }}
    default: return state
  }
}