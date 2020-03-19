import Babies from '../Babies';
import FormEvent from '../FormEvent';
import React from 'react';
import AddBaby from '../AddBaby';
import Events from '../Events';

const EventPage = () => (
  <div>
    <Babies/>
    <FormEvent/>
    <AddBaby/>
    <Events/>
  </div>
);

export default EventPage;
