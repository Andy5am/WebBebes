import omit from 'lodash/omit';

import * as types from '../types/eventToBaby';

const eventToBaby = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_BABY_ASSIGNED:{
      return {
        ...state,
        [action.payload.baby]: action.payload.event,
      }
    }
    case types.EVENT_BABY_UNASSIGNED:{
      return omit(state, action.payload.baby);
    }
    default:{
      return state;
    }
  }
};

export default eventToBaby;

//Selectores

export const getEventsAssign = (state, babyId) => state[babyId];
