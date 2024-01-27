import { promises, existsSync } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createdFilePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    if (existsSync(createdFilePath)) throw new Error('FS operation failed');
    await promises.writeFile(createdFilePath, 'I am fresh and young');
  } catch (err) {
    console.error(err)
  }
};

await create();