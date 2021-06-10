import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Mapper } from './dto/mapper.dto';
import { MapperService } from './mapper.service';

@Controller('mapper')
export class MapperController {
  constructor(private mapperService: MapperService) {}

  @Get(':_id')
  getMapper(@Param('_id') id: Mapper) {
    return this.mapperService.getMapper(id);
  }

  @Post()
  createMapper(@Body() data) {
    return this.mapperService.createMapper(data);
  }
}
