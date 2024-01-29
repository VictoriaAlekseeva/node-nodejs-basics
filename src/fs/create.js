import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createdFilePath = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    if (existsSync(createdFilePath)) throw new Error('FS operation failed');
    await writeFile(createdFilePath, 'I am fresh and young');
    console.log("File 'fresh.txt' has been created, check it in the 'files' folder.");
  } catch (err) {
    console.error(err);
  }
};

await create();