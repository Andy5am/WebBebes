import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import FormBaby from '../FormBaby';
import FormEvent from '../FormEvent';


const store = configureStore();
store.subscribe(()=>console.log());
const App = () => (
  <Provider store={store}>
    <FormBaby/>
    <FormEvent/>
  </Provider>
);


export default App;
