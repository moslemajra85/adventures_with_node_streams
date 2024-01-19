import { createServer } from 'http';
import { basename, join } from 'path';
import { createWriteStream } from 'fs';

const server = createServer((req, res) => {
  const filename = basename(req.headers['x-filename']);
  const destFilename = join('received_files', filename);
  console.log(`Request received file: ${filename}`);
  req.pipe(createWriteStream(destFilename)).on('finish', () => {
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.end('OK\n');
    console.log(`File saved: ${destFilename}`);
  });
});

server.listen(9000, () => console.log('Server is running on port 9000'));
