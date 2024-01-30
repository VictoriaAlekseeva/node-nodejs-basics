import { createWriteStream } from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToWrite = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    console.log("Type text to add it to the 'fileToWrite.txt'. Press Ctrl + C to exit");
    const writableStream = createWriteStream(fileToWrite);
    process.stdin.pipe(writableStream);
    process.stdin.on('end', () => {
        console.log('Text added to fileToWrite.txt');
        process.exit();
    });
};

await write();
