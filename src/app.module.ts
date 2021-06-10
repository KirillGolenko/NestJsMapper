import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './AllExceptionsFilter';
import { MapperModule } from './mapper/mapper.module';
import { ConvertModule } from './convert/convert.module';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [
    ConvertModule,
    MapperModule,
    CsvModule,
    MongooseModule.forRoot(
      'mongodb+srv://hostpitalUser:lolilop9090@cluster0.kzy21.mongodb.net/user?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
