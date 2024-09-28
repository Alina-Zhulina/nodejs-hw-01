import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
