import { error } from 'console';
import { promises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const removeFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await promises.unlink(removeFilePath).catch(error => {
      if (error.code = 'ENOENT') throw new Error ('FS operation failed')
    }
      );
  } catch (error) {
    if (error.code = 'ENOENT') {
      console.error(error.message)
    } else console.error(error)
  }
};

await remove();