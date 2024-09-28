import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();

    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      currentContacts.push(newContact);
    }

    await writeContacts(currentContacts);
  } catch (err) {
    console.error(err);
  }
};
generateContacts(5);
