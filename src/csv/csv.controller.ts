import { Body, Controller, Post } from '@nestjs/common';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
  constructor(private csvService: CsvService) {}

  @Post()
  generateCsv(@Body() data): void {
    return this.csvService.generatorCsv(data);
  }
}
