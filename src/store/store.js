// // import { createStore, combineReducers } from 'redux';
// // import { authReducer } from '../reducers/authReducer';

// // // los reducers se agregan a esta lista 
// // const reducers = combineReducers({ // el objeto tiene la estructura como deseamos que sea nuestra store
// //     auth: authReducer, 
// // });

// // export const store = createStore(reducers);


import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});
