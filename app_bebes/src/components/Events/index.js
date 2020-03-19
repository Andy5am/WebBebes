import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import Event from '../Event';

const Events = ({number, assignedEvents, selectedBaby}) => (
  <div className="events">
    {
      number.length === 0 ? (
        <h1>
          {'No hay acciones :('}
        </h1>
      ) : (
        (number).map(
          index => {
            if (index.babyId === selectedBaby.id) {

              return <Event key={index.id} index={index}/>;
            }
          },
        )
      )
    }
  </div>
);

export default connect(
  state => ({
    number: selectors.getEvents(state),
    selectedBaby: selectors.getSelectedBaby(state),
    assignedEvents: selectors.getSelectedBaby(state)!= undefined ? selectors.getEventsAssign(state,selectors.getSelectedBaby(state).id):[],
  }),
)(Events);
