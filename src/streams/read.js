import { createReadStream } from "fs";
import { stdout } from "process";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const sourceFolder = path.join(__dirname, 'files');
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = createReadStream(fileToRead, 'utf-8');
    readableStream.pipe(process.stdout)
};

await read();