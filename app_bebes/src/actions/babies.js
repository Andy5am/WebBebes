import * as types from '../types/babies';

export const createBaby = (id, name, lastName) => ({
  type: types.BABY_CREATED,
  payload: {id, name, lastName},
});

export const selectBaby = id => ({
  type: types.BABY_SELECTED,
  payload: {id},
});
