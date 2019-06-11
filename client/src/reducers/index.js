import { combineReducers } from 'redux';

import listReducer from './listReducer'
import quoteReducer from './quoteReducer'

const rootReducer = combineReducers({
  list: listReducer,
  quotes: quoteReducer
})

export default rootReducer