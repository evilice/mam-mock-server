import { ApiProperty } from '@nestjs/swagger';

export class AssetCreateEntity {
  @ApiProperty()
  contentId: number;

  @ApiProperty()
  createUserId: number;

  @ApiProperty()
  lastedItUserId: number;

  @ApiProperty({
    example: 'Some asset name',
  })
  assetName: string;

  @ApiProperty()
  shortInfo: string;

  @ApiProperty({
    example: 6.7419,
  })
  rating?: number;

  @ApiProperty()
  duration?: number;

  @ApiProperty()
  genre: number[];

  @ApiProperty()
  createTime: number;

  @ApiProperty()
  lastedTime: number;

  @ApiProperty()
  airTime: number;

  @ApiProperty()
  markDelete: boolean;

  @ApiProperty()
  isTrusted: boolean;
}
