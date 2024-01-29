import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompressedFile = join(__dirname, 'files', 'fileToCompress.txt');
const fileToDecompress = join(__dirname, 'files', 'archive.gz');

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