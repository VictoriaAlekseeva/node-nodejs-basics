import { promises, constants, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const renamedFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        if (existsSync(renamedFile)) throw new Error('FS operation failed');
        await promises.rename(sourceFile, renamedFile).catch(err => {
            if (err.code = 'ENOENT') throw new Error('FS operation failed')
        })
    } catch (err) {
        console.error(err)
    }
};

await rename();