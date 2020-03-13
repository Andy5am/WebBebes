import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/events';

const FormEvent = ({ onSubmit }) => {
  const [type, changeValue1] = useState('');
  const [note, changeValue2] = useState('');
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={e => changeValue1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Notas"
        value={note}
        onChange={e => changeValue2(e.target.value)}
      />
      <button type="submit" onClick={
        () => onSubmit(type, note)
      }>
        {'Crear'}
      </button>
    </Fragment>
  );
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(type, note) {
      dispatch(eventActions.createEvent(uuidv4(),new Date(), type, note));
    },
  }),
)(FormEvent);
