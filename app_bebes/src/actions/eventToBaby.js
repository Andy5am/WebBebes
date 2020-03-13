import * as types from '../types/eventToBaby';

export const assignEventToBaby = (event, baby) => ({
  type: types.EVENT_BABY_ASSIGNED,
  payload: {event, baby},
});

export const unassignEventFromBaby = (event, baby) => ({
  type: types.EVENT_BABY_UNASSIGNED,
  payload: { event, baby},
});
