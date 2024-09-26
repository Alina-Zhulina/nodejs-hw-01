import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const currentContacts = JSON.parse(data) || [];

    const newContact = createFakeContact();

    const updatedContacts = [...currentContacts, newContact];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log('Successfully added a new contact!');
  } catch (err) {
    console.error('Error adding contact:', err);
  }
};

addOneContact();
