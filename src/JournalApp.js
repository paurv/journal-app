import React from 'react'
import { Provider } from 'react-redux'; // Provee informacion a toda la aplicacion 

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}
