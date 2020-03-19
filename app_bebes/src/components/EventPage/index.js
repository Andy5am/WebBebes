import Babies from '../Babies';
import FormEvent from '../FormEvent';
import React from 'react';
import AddBaby from '../AddBaby';
import Events from '../Events';
import './styles.css';

const EventPage = () => (
  <div className='page'>
    <div className='baby-manager'>
    <Babies/>
    <AddBaby/>
    </div>
    <FormEvent/>
    <Events/>
  </div>
);

export default EventPage;
