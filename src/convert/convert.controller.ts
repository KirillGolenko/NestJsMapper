import { Body, Controller, Post } from '@nestjs/common';
import { ConvertService } from './convert.service';

@Controller('convert')
export class ConvertController {
  constructor(private convertService: ConvertService) {}

  @Post()
  createCsv(@Body() data): Promise<any> {
    return this.convertService.convertJSON(data);
  }
}
