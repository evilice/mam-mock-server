import { ApiProperty } from '@nestjs/swagger';

export class Marker {
  @ApiProperty({
    description: 'The times from start video on the timeline',
  })
  time: number;

  @ApiProperty({
    description: 'Markers description',
  })
  text: string;
}
