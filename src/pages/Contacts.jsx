// src/pages/Contacts.jsx
import React from 'react';
import ContactForm from '../components/Contacts/ContactForm';
import OfficeLocations from '../components/Contacts/OfficeLocations';

const Contacts = () => (
  <main
    className="container mx-auto px-6 pb-12 space-y-16"
    style={{ paddingTop: '120px', maxWidth: '90vw' }}
  >
    <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>
    <ContactForm />
    <OfficeLocations />
  </main>
);

export default Contacts;
