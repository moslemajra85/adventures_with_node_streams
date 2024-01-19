import axios from 'axios';

export default function upload(filename, contentStream) {
  return axios.post('http://localhost:9000', contentStream, {
    headers: {
      'Content-Type': 'applicaton/octet-stream',
      'x-filename': filename,
    },
  });
}
