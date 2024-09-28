import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts.length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
