import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CsvService } from '../csv/csv.service';
import { MapperService } from '../mapper/mapper.service';
import { Helper } from './helper.service';

@Injectable()
export class ConvertService {
  constructor(
    public mapperService: MapperService,
    public csvService: CsvService,
    public helper: Helper,
  ) {}

  async convertJSON(@Body() body): Promise<any> {
    const { mapperId, data } = body;
    if (!data || data.length <= 0)
      throw new HttpException('Invalid data', HttpStatus.UNPROCESSABLE_ENTITY);

    const res = await this.mapperService.getMapper(mapperId);

    const news = data.map((value) => {
      return this.helper.applyMapping(res, value);
    });
    return this.csvService.generatorCsv(news);
  }
}
