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
  const jateDB = await openDB("jate", 1);
  // create a transaction and the ability to readwrite privilege to the JATE db
  const tx = jateDB.transaction("jate", "readwrite");
  // open the object store for JATE
  const store = tx.objectStore("jate");
  // utilize the add method on the store constant and pass in the content to the db
  const request = store.put({ jate: content });
  const result = await request;
  // confirm that the request was saved to the db.
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // confirm getDb has been called
  console.log('GET to the database');
  // creating a connection to the db and the version we will be using (1 in this case)
  const jateDB = await openDB("jate", 1);
  // create a transaction and the ability to readonly privilege to the JATE db
  const tx = jateDB.transaction("jate", "readonly");
  // open the object store for JATE
  const store = tx.objectStore("jate");
  // get all the data from the database and store in a constant called request
  const request = store.getAll();
  const result = await request;
  console.log(result);
};

initdb();