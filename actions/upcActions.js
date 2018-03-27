import axios from 'axios';

export const FETCH_UPC = 'FETCH_UPC';
export const FETCHING_UPC = 'FETCHING_UPC';
export const RECEIVE_UPC = 'RECEIVE_UPC';
export const RECEIVE_UPC_ERROR = 'RECEIVE_UPC_ERROR'

const API_KEY = 'C3CF6622B7DF28931D399EB2AC53129E';

export const fetchUpc = function(upcCode) {
  return function(dispatch) {
    dispatch(fetchingUpc());
    return axios.get(`https://api.upcdatabase.org/product/${upcCode}/${API_KEY}`);
  }
}

export const receiveUpc = payload => {
  return {
    type: RECEIVE_UPC,
    payload
  };
};

export const receiveUpcError = error => {
  return {
    type: RECEIVE_UPC_ERROR,
    payload: "Product not found"
  }
}; 

export const fetchingUpc = () => {
  return {
    type: FETCHING_UPC
  }
};