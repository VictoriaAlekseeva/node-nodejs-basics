import { existsSync } from 'fs';
import { rename } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFile = join(__dirname, 'files', 'wrongFilename.txt');
const renamedFile = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        if (existsSync(renamedFile) || !existsSync(sourceFile)) throw new Error('FS operation failed');
        await rename(sourceFile, renamedFile);
        console.log("File 'wrongFilename.txt' has been renamed to 'properFilename.md'.");
    } catch (err) {
        console.error(err);
    }
};

await rename();