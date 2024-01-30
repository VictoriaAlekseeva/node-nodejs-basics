import { existsSync } from 'fs';
import { readdir, mkdir, copyFile, constants } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFolder = join(__dirname, 'files');
const destinationFolder = join(__dirname, 'files_copy');

const copy = async () => {
    try {
        if (!existsSync(sourceFolder) || existsSync(destinationFolder)) throw new Error('FS operation failed')
        await mkdir(destinationFolder, { recursive: false });
        const files = await readdir(sourceFolder, { withFileTypes: true });
        for (const file of files) {
            const sourceFile = join(sourceFolder, file.name);
            const destinationFile = join(destinationFolder, file.name);
            await copyFile(sourceFile, destinationFile, constants.COPYFILE_EXCL);
        }
        console.log("Folder 'files' has been copied into folder 'files_copy'.")
    } catch (err) {
        console.error(err);
    }
};

await copy();
