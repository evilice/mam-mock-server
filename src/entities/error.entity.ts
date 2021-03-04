import { ApiProperty } from '@nestjs/swagger';

export class ErrorEntity {
  @ApiProperty({
    description: 'Short errors text',
  })
  title: string;

  @ApiProperty({
    example: 404,
  })
  code?: number;

  @ApiProperty({
    example: 'Full errors text description',
  })
  description?: string;
}
