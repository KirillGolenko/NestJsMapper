import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { json2csv } from 'json-2-csv';
import * as fs from 'fs';

@Injectable()
export class CsvService {
  generatorCsv(@Body() data): void {
    if (data.length <= 0)
      throw new HttpException(
        'Invalid data csv',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    return json2csv(data, (err, csv): void => {
      fs.writeFile('users.csv', csv, (err) => {
        if (err)
          throw new HttpException(
            'Failed to create users.csv',
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
      });
    });
  }
}
