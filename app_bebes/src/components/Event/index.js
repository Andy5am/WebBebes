import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';
import * as eventToBabyActions from '../../actions/eventToBaby';

const Event = ({
  evento,
  onClick,
  selectedBaby,
}) => (
  <div className='events'>
    <div className="event-date">
      Fecha: {evento.date.toString()}
    </div>
    <div className="event-type">
      Tipo: {evento.eventType}
    </div>
    <div className="event-notes">
      Notas: {evento.notes}
    </div>
    <div className="event-baby-name">
      Realizado por: {evento.babyName}
    </div>
    <button className="delete-event-button" type="submit" onClick={
      ()=> onClick(selectedBaby)
    }>
    {'Eliminar'}
    </button>
  </div>
);

export default connect(
  (state, { index }) => ({
    evento: index,
    selectedBaby: selectors.getSelectedBaby(state),
  }),
  (dispatch, {index}) => ({
    onClick(selectedBaby) {
      dispatch(actions.deleteEvent(index.id));
      dispatch(eventToBabyActions.unassignEventFromBaby(index.id,selectedBaby.id));
      console.log('index:',index);
    }
  }),
)(Event);
