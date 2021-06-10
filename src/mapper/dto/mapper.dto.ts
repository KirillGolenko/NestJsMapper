import { MinLength } from 'class-validator';

export class Mapper {
  @MinLength(24)
  _id: string;
}
