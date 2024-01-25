import { promises, constants } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createdFilePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await promises.access(createdFilePath, constants.F_OK)
      .then(() => { throw new Error('FS operation failed') }
      );
  } catch (err) {
    if (err.code === 'ENOENT') {
      await promises.writeFile(createdFilePath, 'I am fresh and young');
    } else console.error(err.message)
  }
};

await create();