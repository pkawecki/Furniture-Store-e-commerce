import { combineReducers, createStore } from 'redux';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import initialState from './initialState';
import modeReducer from './modeRedux';
import compareReducer from './compareRedux';
import productsReducer from './productsRedux';
import brandsReducer from './brandsRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  compare: compareReducer,
  products: productsReducer,
  mode: modeReducer,
  brands: brandsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
