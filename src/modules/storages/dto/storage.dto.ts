import { IsString } from 'class-validator';

export class StorageDto {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  path: string;
}
