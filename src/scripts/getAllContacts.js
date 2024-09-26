import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data) || [];
    return contacts;
  } catch (err) {
    console.error('Error reading contacts:', err);
    throw err;
  }
};

console.log(await getAllContacts());
