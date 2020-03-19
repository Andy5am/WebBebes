import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';

const Baby = ({
  babyName,
  lastName,
  isSelected = false,
  onClick,
}) => (
  <div className={
    `
      baby-wrapper
      ${isSelected ? 'baby--selected' : ''}
    `
  }
  onClick = {onClick}
  >
    <div className="baby">
      {babyName+' '+lastName}
    </div>
  </div>
);

export default connect(
  (state, { index }) => ({
    babyName: index.name,
    lastName: index.lastName,
    isSelected: selectors.getSelectedBaby(state) === index,
  }),
  (dispatch, {index}) => ({
    onClick() {
      dispatch(actions.selectBaby(index));
      console.log('index:',index);
    }
  }),
)(Baby);
