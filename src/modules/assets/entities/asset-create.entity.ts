import { ApiProperty } from '@nestjs/swagger';
import { AssetType } from '../types';

export class AssetCreateEntity {
  @ApiProperty({
    example: 'media',
    description: 'Asset content type',
  })
  type: AssetType;

  @ApiProperty({
    example: 'Some asset name',
  })
  name: string;

  @ApiProperty({
    example: '10.20.30.40/share/some-dir/film.mp4',
    description: 'Path to asset file',
  })
  path?: string;

  @ApiProperty({
    example: 6.7419,
  })
  rate?: number;

  @ApiProperty({
    example: 'some text',
    description: 'Brief description of the asset',
  })
  sketch: string;

  @ApiProperty({
    example: 'Some long text',
    description: 'Full asset description',
  })
  description: string;

  @ApiProperty()
  created?: string;

  @ApiProperty()
  duration?: number;

  @ApiProperty()
  impressionCount: number;

  @ApiProperty()
  copyright: string;

  @ApiProperty()
  ganre: Array<string>;
}
