import {
    createReadStream,
} from 'node:fs';
// import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url'
const {
    createHash,
} = await import('node:crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToHash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');


const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(fileToHash);
    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(hash.digest('hex'));
        }
    })
};

await calculateHash();