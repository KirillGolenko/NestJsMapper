import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MapperController } from './mapper.controller';
import { User, MapperSchema } from './mapper.schema';
import { MapperService } from './mapper.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: MapperSchema }]),
  ],
  exports: [MapperService],
  controllers: [MapperController],
  providers: [MapperService],
})
export class MapperModule {}
