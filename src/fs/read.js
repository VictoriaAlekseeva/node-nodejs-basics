import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFilePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const data = await readFile(readFilePath, { encoding: 'utf8' }).catch(error => {
      if (error.code === 'ENOENT') throw new Error('FS operation failed')
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }

};

await read();