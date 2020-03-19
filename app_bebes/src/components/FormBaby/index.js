import { v4 as uuidv4 } from 'uuid';
import React, { useState} from 'react';
import { connect } from 'react-redux';
import * as babyActions from '../../actions/babies';
import * as selectors from '../../reducers';
import { Link } from 'react-router-dom';
import './styles.css';

const FormBaby = ({ onSubmit, number }) => {
  const [name, changeValue1] = useState('');
  const [lastName, changeValue2] = useState('');
  return (
    <div className='baby-form-wrapper'>
    <div className='baby-form'>
      <div>{
        number === 0 ? (
          <h2>{'No hay bebés'}</h2>
        ) : ''
      }
      </div>
      <label className='baby-label'>{'Agregar bebé'} </label>
      <input className='name-input'
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={e => changeValue1(e.target.value)}
      />
      <input className='lastName-input'
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={e => changeValue2(e.target.value)}
      />
      <Link to={'/events'}>
      <button className='createBaby-button' type="submit" onClick={
        () => onSubmit(name, lastName)
      }>
        {'Crear'}
      </button>
      </Link>
    </div>
    </div>
  );
}

export default connect(
  state => ({
    number: selectors.getBabies(state).length,
  }),
  dispatch => ({
    onSubmit(name, lastName) {
      dispatch(babyActions.selectBaby(dispatch(babyActions.createBaby(uuidv4(), name, lastName)).payload));
    },
  }),
)(FormBaby);
