import { unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const removeFilePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await unlink(removeFilePath).catch(error => {
      if (error.code = 'ENOENT') throw new Error('FS operation failed');
    });
    console.log("File 'fileToRemove.txt' has been deleted.");
  } catch (error) {
    console.error(error);
  }
};

await remove();