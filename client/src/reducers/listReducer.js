

const initialState = {
  loading: false,
  allLists: [],
  currentList: null,
}

export default function listReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_LISTS':
      return { ...state, loading: true}
    case 'CREATE_LIST':
      return { ...state, list: action.payload };
    case 'FETCH_LISTS':
      return { ...state, loading: false, allLists: action.payload}
      case 'DELETE_LIST':
      return {...state, currentList: state.allLists.filter(list => list.id !== action.payload.id), loading: false }
    case 'RETRIEVING_SELECTED_LIST':
      return { ...state, loading: true }
    case 'SET_LIST':
      return { ...state, currentList: state.allLists.find(list => list.id === action.payload.id) }
    case 'ADD_TO_FAVORITES':
      return { ...state, currentList: {...state.currentList, favorites: action.payload }}
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, currentList: {...state.currentList, favorites: action.payload }}
    default: return state
  }
}