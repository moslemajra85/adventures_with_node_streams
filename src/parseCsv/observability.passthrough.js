import { PassThrough } from 'stream';

export function getObservabiltyStream() {
  return new PassThrough().on('data', (chunk) =>
    console.log(`${chunk.length} bytes has been pulled.`)
  );
}
