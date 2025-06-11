import React from 'react';

const docs = [ { id: 1, name: 'Инструкция по эксплуатации', url: '/docs/manual.pdf' } ];

const Documentation = () => (
  <section>
    <h2 className='text-2xl font-semibold mb-4'>Инструкции и документация</h2>
    <ul className='list-disc list-inside'>
      {docs.map(doc => (
        <li key={doc.id}>
          <a href={doc.url} download className='text-blue-600 hover:underline'>{doc.name}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default Documentation;