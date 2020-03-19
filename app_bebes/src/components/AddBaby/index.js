import React from 'react';
import {Link} from 'react-router-dom';

const AddBaby = () => (
  <Link to={'/'}>
    <button className='add-baby-button'>
      {'+'}
    </button>
  </Link>
);

export default AddBaby;
