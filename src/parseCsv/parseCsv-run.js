import fs from 'fs';
import { parse } from 'csv-parse';
import { SumProfit } from './sum-profit.js';
import { FilterByCountry } from './filter-by-country.js';
import { transform } from 'stream-transform';
import { getObservabiltyStream } from './observability.passthrough.js';

// this transform stream will filter csv data by country
const filterByCountry = new FilterByCountry('Italy');

// will Sum Up all all profit for a given country
const sumProfit = new SumProfit();

// Monitor to see how many bytes has been pulled
const monitor = getObservabiltyStream();

const parser = parse({
  columns: true,
});

fs.createReadStream('data.csv')
  .pipe(monitor)
  .pipe(parser)
  .pipe(filterByCountry)
  .pipe(sumProfit)
  .pipe(process.stdout);
