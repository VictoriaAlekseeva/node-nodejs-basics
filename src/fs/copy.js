import { readdir, mkdir, copyFile, constants, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFolder = path.join(__dirname, 'files');
const destinationFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await stat(sourceFolder);
        await mkdir(destinationFolder, { recursive: false });
        const files = await readdir(sourceFolder, { withFileTypes: true });
        for (const file of files) {
            const sourceFile = path.join(sourceFolder, file.name);
            const destinationFile = path.join(destinationFolder, file.name);
            await copyFile(sourceFile, destinationFile, constants.COPYFILE_EXCL);
        }
    } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'EEXIST') {
            throw new Error ('FS operation failed')
        } else console.error(err);
    }
};

await copy();
