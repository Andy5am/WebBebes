import omit from 'lodash/omit';
import get from 'lodash/get';
import flattenDeep from 'lodash/flattenDeep';
import pull from 'lodash/pull';

import * as types from '../types/eventToBaby';

const eventToBaby = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_BABY_ASSIGNED:{
      return {
        ...state,
        [action.payload.baby]: flattenDeep([get(state, action.payload.baby),action.payload.event]),
      }
    }
    case types.EVENT_BABY_UNASSIGNED:{
      return {
      ...state,
      [action.payload.baby]: pull(get(state, action.payload.baby),action.payload.event),
      //[action.payload.baby]: [...state.payload.baby].filter(event => event !==action.payload.event),
      };
    }
    default:{
      return state;
    }
  }
};

export default eventToBaby;

//Selectores

//export const getEventsAssign = (state, babyId) => state[babyId];
export const getEventsAssign = (state) => state;
