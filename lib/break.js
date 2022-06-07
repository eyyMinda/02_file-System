import {file} from './file.js';

const readStatus = await file.read('users', 'josh.js');
console.log(readStatus)