import { ApiProperty } from '@nestjs/swagger';

export class Subtitle {
  @ApiProperty({
    description: 'The times from start video on the timeline',
  })
  time: number;

  @ApiProperty({
    description: 'Subtitles text',
  })
  text: string;
}
