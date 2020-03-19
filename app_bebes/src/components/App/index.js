import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { configureStore } from '../../store';
import FormBaby from '../FormBaby';
import FormEvent from '../FormEvent';
import Babies from '../Babies';
import EventPage from '../EventPage';

const store = configureStore();
store.subscribe(()=>console.log());
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={FormBaby}/>
        <Route path="/events" component={EventPage}/>
      </Switch>
    </Router>
  </Provider>
);


export default App;
