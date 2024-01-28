import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileToDecompress = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {

    const gunzip = createGunzip();
    const source = createReadStream(fileToDecompress);
    const destination = createWriteStream(decompressedFile);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();