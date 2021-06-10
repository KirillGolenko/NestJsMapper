import { Module } from '@nestjs/common';
import { CsvModule } from '../csv/csv.module';
import { MapperModule } from '../mapper/mapper.module';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';
import { Helper } from './helper.service';

@Module({
  imports: [MapperModule, CsvModule],
  controllers: [ConvertController],
  providers: [ConvertService, Helper],
})
export class ConvertModule {}
