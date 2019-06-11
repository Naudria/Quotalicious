const initialState = {
  loading: false,
  selectedQuote: null,
  allQuotes: [],
}

export default function quoteReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_QUOTES':
      return { ...state, loading: true }
    case 'FETCH_QUOTES':
      return { ...state, loading: false, allQuotes: action.payload }
    case 'QUOTE_SELECTED':
      return { ...state, loading: false, selectedQuote: action.payload }
    default: return state
  }
}