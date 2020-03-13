import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import * as babyActions from '../../actions/babies';


const FormBaby = ({ onSubmit }) => {
  const [name, changeValue1] = useState('');
  const [lastName, changeValue2] = useState('');
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={e => changeValue1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={e => changeValue2(e.target.value)}
      />
      <button type="submit" onClick={
        () => onSubmit(name, lastName)
      }>
        {'Crear'}
      </button>
    </Fragment>
  );
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name, lastName) {
      dispatch(babyActions.createBaby(uuidv4(), name, lastName));
    },
  }),
)(FormBaby);
