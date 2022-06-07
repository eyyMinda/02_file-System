import colors from './terminalColors.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};
/**
 * 
 * @param {string} dir 
 * @param {string} fileName 
 * @returns {string} Absolute path
 */
file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, '../data', dir, fileName);
}


/**
 * Create new file if it's not yet in specified dir
 * @param {string} dir Relative... ex.:/data/users
 * @param {string} fileName File name with extension... ex.: main.json
 * @param {object} content Whatever is inside the the object... ex.: {'a': 'John'}
 * @returns {} File has been created
*/
file.create = async (dir, fileName, content) => {
    try {
        console.log('file is being created...');
        const filePath = file.fullPath(dir, fileName);
        await fs.writeFile(await fs.open(filePath, 'wx'), JSON.stringify(content))
        return 'File Created';
    } catch (e) {
        console.log(colors)
        console.log('\x1b[36m%s\x1b[0m', '---Error--- Creation unsuccesful');
    }
}

file.read = async (dir, fileName) => {
    try {
        console.log(`reading ${fileName}...`);
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    } catch (e) {
        return `---Error--- ${fileName} - File not found`;
    }
}

file.update = () => {
    try {
        console.log('file is updating...');
    } catch (e) {
        return `---Error--- ${fileName} - Failed to Update`;
    }
}

file.delete = (dir, fileName) => {
    try {
        console.log('deleting file...');
    } catch (e) {
        return `---Error--- ${fileName} - Failed to Delete`;
    }
}

export { file };