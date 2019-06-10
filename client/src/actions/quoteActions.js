import fetch from 'isomorphic-fetch'
import axios from 'axios';

// INITIALIZATION

const API_BASE_URL = 'https://favqs.com/api';
const API_KEY = '2753f23b0d360665f53e7ae14a7382d5';

const requestConfig = {
    headers: {
        Authorization: `Token token="${API_KEY}"`
    }
};

export default function fetchQuotes() {
  return (dispatch) => {
    axios.get(`${API_BASE_URL}/quotes`, requestConfig)
    .then(response => {
      const quotes = response.data.quotes.map(quote => {
          return quote;
        });
        dispatch(getQuotesAsync(quotes));
      });
  }
}

function getQuotesAsync(quotes){  
  return {
    type: 'FETCH_QUOTES',
    payload: quotes
  };
}