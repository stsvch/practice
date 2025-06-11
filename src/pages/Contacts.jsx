// src/pages/Contacts.jsx
import React from 'react';
import ContactForm from '../components/Contacts/ContactForm';
import OfficeLocations from '../components/Contacts/OfficeLocations';

const Contacts = () => (
  <main className='container mx-auto px-4 py-8 space-y-12'>
    <ContactForm />
    <OfficeLocations />
  </main>
);

export default Contacts;