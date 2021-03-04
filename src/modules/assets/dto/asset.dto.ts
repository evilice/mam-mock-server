import { IsString } from 'class-validator';
import { AssetCreateDto } from './asset-create.dto';

export class AssetDto extends AssetCreateDto {
  @IsString()
  id: string;
}
