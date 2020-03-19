import React from 'react';
import {connect} from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import Baby from '../Baby';

const Babies = ({number}) => (
  <div className="babies">
    {
      number.length === 0 ? (
        <h2>
          {'No hay bebés'}
        </h2>
      ) : (
        number.map(
          index => (
            <Baby
              key={index.id}
              index={index}
            />
          ),
        )
      )
    }
  </div>
);

export default connect(
  state => ({
    number: selectors.getBabies(state),
  }),
)(Babies);
