import {combineReducers} from 'redux';
import omit from 'lodash/omit';
import pull from 'lodash/pull';


import * as types from '../types/events';

const order = (state=[], action) => {
  switch (action.type) {
    case types.EVENT_CREATED: {
      return [...state, action.payload.id];
    }
    case types.EVENT_DELETED: {
      return [...state].pull(action.payload.id);
    }
    default:{
      return state;
    }
  }
};

const byId = (state={}, action) => {
  switch (action.type) {
    case types.EVENT_CREATED:{
      return {
        ...state,
        [action.payload.id]: action.payload,
      }
    }
    case types.EVENT_DELETED:{
      return omit(state, action.payload.id);
    }
    default:{
      return state;
    }
  }
};

const events = combineReducers({
  byId,
  order,
});

export default events;

//Selectores
export const getEvent = (state, id) => state.byId[id];

export const getEvents = state => state.order.map(
  id => getEvent(state, id),
).filter(event => event!=null);
