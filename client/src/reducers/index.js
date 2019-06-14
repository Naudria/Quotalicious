import { combineReducers } from 'redux';
import listReducer from './listReducer'
import quoteReducer from './quoteReducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  list: listReducer,
  quotes: quoteReducer,
  form: formReducer

})

export default rootReducer