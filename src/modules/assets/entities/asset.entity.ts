import { ApiProperty } from '@nestjs/swagger';
import { AssetCreateEntity } from './asset-create.entity';

export class Asset extends AssetCreateEntity {
  @ApiProperty({
    description: 'Media asset identifier',
  })
  mediAassetId: number;
}
