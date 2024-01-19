import upload from './upload.js';
import { createReadStream } from 'fs';
import { PassThrough } from 'stream';
import { createBrotliCompress } from 'node:zlib';
import { basename } from 'path';

const filePath = process.argv[2];
const filename = basename(filePath);
console.log('Myfile', filePath);
const contentStream = new PassThrough();

upload(`${filename}.br`, contentStream)
  .then((response) => {
    console.log(`Server response: ${response.data}`);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

createReadStream(filePath).pipe(createBrotliCompress()).pipe(contentStream);
