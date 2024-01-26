import { promises } from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const data = await promises.readFile(readFilePath, { encoding: 'utf8' }).catch(error => {
      if (error.code === 'ENOENT') throw new Error('FS operation failed')
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }

};

await read();