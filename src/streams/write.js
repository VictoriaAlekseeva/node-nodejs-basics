import { createWriteStream } from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    console.log('press Ctrl + D or Ctrl + Z to exit')
    const writableStream = createWriteStream(fileToWrite);
    process.stdin.pipe(writableStream);
    process.stdin.on('end', () => {
        console.log('Text added to fileToWrite.txt');
        process.exit();
    });
};

await write();
