// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCIES_SUCCESS,
  GET_CHOICED_PRODUCT,
  GET_OBJ_CURRENCIES_SUCCESS } from '../actions/index';

const initialState = {
  objectOfCurrenciesDaitails: {},
  currencies: ['BRL'],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: [...action.currencies],
    };
  case GET_CHOICED_PRODUCT:
    return {
      ...state,
      expenses: [...state.expenses, action.product],
    };
  case GET_OBJ_CURRENCIES_SUCCESS:
    return {
      ...state,
      objectOfCurrenciesDaitails: { ...action.objectCurrencies },
    };
  default:
    return state;
  }
}

export default wallet;
