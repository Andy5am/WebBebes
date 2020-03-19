import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const AddBaby = () => (
  <div className='container'>
  <Link to={'/'}>
    <button className='add-baby-button'>
      {'+'}
    </button>
  </Link>
  </div>
);

export default AddBaby;
