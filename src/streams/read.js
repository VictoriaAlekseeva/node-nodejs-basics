import { createReadStream } from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = createReadStream(fileToRead, 'utf-8');
    readableStream.pipe(process.stdout)
};

await read();