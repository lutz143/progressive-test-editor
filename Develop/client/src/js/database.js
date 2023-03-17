import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// export a function that accepts user content and adds it to the database
export const putDb = async (content) => {
  // confirm putDb has been called
  console.log('PUT to the database');

  // creating a connection to the db and the version we will be using (1 in this case)
  const jateDb = await openDB('jate', 1);

  // create a transaction and the ability to readwrite privilege to the JATE db
  const tx = jateDb.transaction('jate', 'readwrite');

  // open the object store for JATE
  const store = tx.objectStore('jate');

  // utilize the add method on the store constant and pass in the content to the db
  const request = store.put({ jate: content });

  // confirm that the request was saved to the db.
  const result = await request;
  console.log('Content successfully passed to the db', result);

  // if db not successfully saved, log an error message
  console.error('putDb not implemented');
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // confirm getDb has been called
  console.log('GET to the database');
  
  // creating a connection to the db and the version we will be using (1 in this case)
  const jateDb = await openDB('jate', 1);

  // create a transaction and the ability to readonly privilege to the JATE db
  const tx = jateDb.transaction('jate', 'readonly');

  // open the object store for JATE
  const store = tx.objectStore('jate');

  // get all the data from the database and store in a constant called request
  const request = store.getAll();
  
  // if db not successfully GET, log an error message
  console.error('getDb not implemented');

  // Get confirmation of the request and return the result
  const result = await request;
  console.log(result);
  // return result.value;
}


initdb();
