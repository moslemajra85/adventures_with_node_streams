import { Transform } from 'stream';

export class SumProfit extends Transform {
  constructor(options = {}) {
    options.objectMode = true;
    super(options);
    this.total = 0;
  }

  _transform(record, encoding, callback) {
    this.total += Number.parseFloat(record.profit);
    callback();
  }

  _flush(callback) {
    this.push(this.total.toString());
    callback();
  }
}
