import { v4 as uuidv4 } from 'uuid';
import React, { useState} from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as eventActions from '../../actions/events';
import * as eventToBabyActions from '../../actions/eventToBaby';
import './styles.css';

const FormEvent = ({ onSubmit , selectedBaby}) => {
  const [type, changeValue1] = useState('Siesta');
  const [note, changeValue2] = useState('');
  return (
    <div className='event-form-wrapper'>
    <div className='event-form'>
      <h2>{'Agregar evento:'}</h2>
      <label>Tipo de evento:</label>
      <select  className='select-events' onChange={e => changeValue1(e.target.value)} value={type}>
        <option value={'Siesta'}>Siesta</option>
        <option value={'Pacha'}>Pacha</option>
        <option value={'Cambio de pañal (pipí)'}>Cambio de pañal (pipí)</option>
        <option value={'Cambio de pañal (popó)'}>Cambio de pañal (popó)</option>
        <option value={'Otro'}>Otro</option>
      </select>
      <input className='note-input'
        type="text"
        placeholder="Notas"
        value={note}
        onChange={e => changeValue2(e.target.value)}
      />
      <button className='add-events-button' type="submit" onClick={
        () => onSubmit(type, note, selectedBaby)
      }>
        {'Crear'}
      </button>
    </div>
    </div>
  );
}

export default connect(
  state => ({
    selectedBaby: selectors.getSelectedBaby(state),
  }),
  dispatch => ({
    onSubmit(type, note, selectedBaby) {
      dispatch(eventToBabyActions.assignEventToBaby(  dispatch(eventActions.createEvent(uuidv4(),new Date(), type, note, selectedBaby.id, selectedBaby.name)).payload.id,selectedBaby.id))
    },
  }),
)(FormEvent);
