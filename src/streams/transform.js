import { Transform } from 'stream';

const transform = async () => {
    console.log("Type text and press Enter to transform it. Press Ctrl + C to exit");
    const transformReverse = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            this.push(reversedText);
            callback();
        }
    });
    process.stdin.pipe(transformReverse).pipe(process.stdout);
};

await transform();