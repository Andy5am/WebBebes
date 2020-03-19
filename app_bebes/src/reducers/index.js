import {combineReducers} from 'redux';

import baby, * as babySelectors from './babies';
import events, * as eventsSelectors from './events';
import eventToBaby, * as eventToBabySelectors from './eventToBaby';


const reducer = combineReducers({
  baby,
  events,
  eventToBaby,
});

export default reducer;

//Selectores globales
export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
export const getBabies = state => babySelectors.getBabies(state.baby);

export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);
export const getEvents = state => eventsSelectors.getEvents(state.events);

export const getEventsAssign = (state, babyId) => eventToBabySelectors.getEventsAssign(state.eventToBaby, babyId);

export const getSelectedBaby = state =>babySelectors.getSelectedBaby(state.baby);
