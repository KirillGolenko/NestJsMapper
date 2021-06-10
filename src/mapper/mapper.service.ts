import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MapperDocument, User } from './mapper.schema';

@Injectable()
export class MapperService {
  constructor(
    @InjectModel(User.name) private MapperModel: Model<MapperDocument>,
  ) {}

  getMapper(@Param() id): Promise<MapperDocument> {
    return this.MapperModel.findById(id).then((res) => {
      if (!res)
        throw new HttpException('Mepper not found', HttpStatus.NOT_FOUND);
      return res;
    });
  }

  createMapper(@Body() data): Promise<void | MapperDocument> {
    const createdMapper = new this.MapperModel(data);
    return createdMapper.save().catch((err) => {
      if (err) throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    });
  }
}
