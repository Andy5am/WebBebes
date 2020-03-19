import { v4 as uuidv4 } from 'uuid';
import React, { useState} from 'react';
import { connect } from 'react-redux';
import * as eventActions from '../../actions/events';

const FormEvent = ({ onSubmit }) => {
  const [type, changeValue1] = useState('Siesta');
  const [note, changeValue2] = useState('');
  return (
    <div>
      <label>Tipo de evento:</label>
      <select onChange={e => changeValue1(e.target.value)} value={type}>
        <option value={'Siesta'}>Siesta</option>
        <option value={'Pacha'}>Pacha</option>
        <option value={'Cambio de pañal (pipí)'}>Cambio de pañal (pipí)</option>
        <option value={'Cambio de pañal (popó)'}>Cambio de pañal (popó)</option>
        <option value={'Otro'}>Otro</option>
      </select>
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
    </div>
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
