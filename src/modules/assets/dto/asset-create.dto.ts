import { IsString, IsNumber } from 'class-validator';
import { AssetType } from '../types';

export class AssetCreateDto {
  @IsString()
  type: AssetType;

  @IsString()
  name: string;

  @IsString()
  path?: string;

  @IsNumber()
  rate: number;

  @IsString()
  sketch: string;

  @IsString()
  description: string;

  @IsString()
  created: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  impressionCount: number;

  @IsString()
  copyright: string;

  ganre: Array<string>;
}
