import React from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import ServiceFormClassBased from './components/ServiceFormClassBased';
import ServiceListClassBased from './components/ServiceListClassBased';

function App() {
  return (
    <>
      <ServiceForm />
      <ServiceList />
      <hr />
      <ServiceFormClassBased />
      <ServiceListClassBased />
    </>
  );
}

export default App;
