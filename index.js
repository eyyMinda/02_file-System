import { file } from './lib/file.js';

const user = {
    name: 'Sarah',
    age: 22,
    isNice: true
}

/* IIFE
(async() => {
    ...
})();
*/


const readStatus = await file.read('users', 'test.json');
if (readStatus) console.log(readStatus);

const createStatus = await file.create('users', 'test.json', user);
if (createStatus) console.log(createStatus);

const readStatus2 = await file.read('users', 'test.json');
if (readStatus2) console.log(readStatus2);
user.isNice = false;
const updateStatus = await file.update('users', 'test.json', user);
if (updateStatus) console.log(updateStatus);

const readStatus3 = await file.read('users', 'test.json');
if (readStatus3) console.log(readStatus3);

const deleteStatus = await file.delete('users', 'test.json')
if (deleteStatus) console.log(deleteStatus)

const readStatus4 = await file.read('users', 'test.json');
if (readStatus4) console.log(readStatus4);
