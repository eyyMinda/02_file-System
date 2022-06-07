import { file } from './lib/file.js';

const user = {
    name: 'Sarah',
    age: 22,
    isNice: true
}

console.log('Hello World!')


const readStatus = await file.read('users', 'josh.json')
if (readStatus) console.log(readStatus)

const createStatus = await file.create('users', 'test.json', user)
if (createStatus) console.log(createStatus)

// const readStatus3 = await file.read('users', 'test.json')
// if(readStatus3) console.log(readStatus3)
