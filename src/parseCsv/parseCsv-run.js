import fs from 'fs';
import { parse } from 'csv-parse';
import { SumProfit } from './sum-profit.js';
import { FilterByCountry } from './filter-by-country.js';
import { transform } from 'stream-transform';

const filterByCountry = new FilterByCountry('Italy');
//const sumProfit = new SumProfit();
const parser = parse({
  columns: true,
});

fs.createReadStream('data.csv')
  .pipe(parser)
  .pipe(filterByCountry)
  .pipe(process.stdout);
