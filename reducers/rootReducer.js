import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

// Reducers 
import uiReducer from './uiReducer';
import upcReducer from './upcReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  upc: upcReducer,
  toast
});

export default rootReducer;

