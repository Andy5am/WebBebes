import * as types from '../types/events';

export const createEvent = (id, date, eventType, notes, babyId, babyName) => ({
  type: types.EVENT_CREATED,
  payload: {id, date, eventType, notes, babyId, babyName},
});

export const deleteEvent = id => ({
  type: types.EVENT_DELETED,
  payload: {id},
});
