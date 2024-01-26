import { promises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readDirPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    await promises.access(readDirPath)
      .then(
        () => { },
        (error) => {
          if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
          }
        }
      );
    const folderContent = await promises.readdir(readDirPath, { withFileTypes: true });
    const filesInFolder = folderContent.filter(item => item.isFile()).map(item => item.name.split('.')[0])
    console.log(filesInFolder);
  } catch (err) {
    console.error(err)
  }
};

await list();