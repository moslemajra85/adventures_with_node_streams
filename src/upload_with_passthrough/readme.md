# Passthrough stream as placeholder for data that will be read or written in the future

We want to apply `some transformation asynchronously`` to our data after an upload function is called.The idea is to pass a **PassThrough stream** as to the upload
function which will act as **placeholder**.The upload function will wait for the data
to pass through the **Passthrough instance** to initiate the upload.

## Program components

- Upload module: contain the logic of uploading file to the server.
- Server module: The http node server that we need to upload files.
- Upload cli: cli that will use to read filename from stdin and upload to the server

## usage

start the server

```js

node src/server.js

```

run the upload cli

```js

node src/upload-cli.js myfile

```

to decompress the uploaded file

```js

brotli received_files/myfile.br

```
