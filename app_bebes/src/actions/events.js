import * as types from '../types/events';

export const createEvent = (id, date, eventType, notes) => ({
  type: types.EVENT_CREATED,
  payload: {date, eventType, notes},
});

export const deleteEvent = id => ({
  type: types.EVENT_DELETED,
  payload: {id},
});
