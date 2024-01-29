import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readDirPath = join(__dirname, 'files');

const list = async () => {
  try {
    if (!existsSync(readDirPath)) throw new Error('FS operation failed');
    const folderContent = await readdir(readDirPath, { withFileTypes: true });
    const filesInFolder = folderContent.filter(item => item.isFile()).map(item => item.name.split('.')[0]);
    console.log("List of files in the 'files' folder:")
    console.log(filesInFolder);
  } catch (err) {
    console.error(err);
  }
};

await list();