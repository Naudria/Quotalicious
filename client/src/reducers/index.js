import { combineReducers } from 'redux';
import listReducer from './listReducer'
import quoteReducer from './quoteReducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	// our app has a piece of state called list (or quotes, or form) where the value is 
	// whatever gets returned from the reducer on the right of the colon (i.e., a list of quotes).
  list: listReducer,
  quotes: quoteReducer,
  form: formReducer

})

export default rootReducer