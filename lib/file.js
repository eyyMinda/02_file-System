const file = {};

/**
 * Create new file if it's not yet in specified dir
 * @param {string} dir Relative... ex.:/data/users
 * @param {string} fileName File name with extension... ex.: main.json
 * @param {*} content What's inside the file... ex.: {'a': 'John'}
 * @returns {} File has been created
*/

file.create = (dir, fileName, content) => {
    if(typeof content !== 'string'){
        content = JSON.stringify(content)
    }
    console.log('file is being created...')
}
file.read = () => {
    console.log('reading file...')
}
file.update = () => {
    console.log('file is updating...')
}
file.delete = () => {
    console.log('deleting file...')
}

export { file };