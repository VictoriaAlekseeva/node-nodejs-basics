import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {

    const gzip = createGzip();
    const source = createReadStream(fileToCompress);
    const destination = createWriteStream(compressedFile);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();