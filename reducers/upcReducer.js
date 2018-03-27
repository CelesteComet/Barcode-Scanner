import { 
  FETCHING_UPC, 
  RECEIVE_UPC, 
  RECEIVE_UPC_ERROR 
} from '../actions/upcActions';

let initialState = {
  fetching: false,
  errorMessage: null,
  upc: null
};

const upcReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCHING_UPC:
      newState.fetching = true;
      return newState;
    case RECEIVE_UPC_ERROR:
      newState.fetching = false;
      newState.errorMessage = action.payload;
      return newState;
    case RECEIVE_UPC:
      newState.fetching = false;
      newState.upc = action.payload;
      return newState;
    default:
      return newState;
  };
};

export default upcReducer