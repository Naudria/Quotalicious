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
    default: return state
  }
}