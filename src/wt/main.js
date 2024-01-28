import {Worker} from 'worker_threads';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToWorker = path.join(__dirname, 'worker.js');

const CPUQuantity = os.cpus().length;

const performCalculations = async () => {
    const results = []
    const initialNum = 10;
    for (let i = 0; i < CPUQuantity; i++ ) {
        const worker = new Worker(pathToWorker, {workerData: initialNum + i});

        const workerPromise = new Promise((resolve) => {
            worker.on('message', (result) => resolve(result));
            worker.on("error", (err) => resolve({ status: 'error', data: null}));
        })
        results.push(workerPromise)
    }

    const result = await Promise.all(results);
    console.log(result)
};

await performCalculations();