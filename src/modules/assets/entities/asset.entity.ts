import { ApiProperty } from '@nestjs/swagger';
import { AssetCreateEntity } from './asset-create.entity';

export class Asset extends AssetCreateEntity {
  @ApiProperty({
    example: 'f423-4j12a-dfjasdk234-34jasdlasd',
    description: 'Asset identificator',
  })
  id: string;
}
