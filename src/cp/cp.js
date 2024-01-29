import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToChildProcess = path.join(__dirname,'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(pathToChildProcess, args);
};

// Put your arguments in function call to test this functionality spawnChildProcess( /* [someArgument1, someArgument2, ...] */)
spawnChildProcess( [1, 2, 3, 4]);