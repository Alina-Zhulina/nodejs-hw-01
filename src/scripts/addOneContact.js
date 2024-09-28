import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();

    const newContact = createFakeContact();

    currentContacts.push(newContact);

    await writeContacts(currentContacts);
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
