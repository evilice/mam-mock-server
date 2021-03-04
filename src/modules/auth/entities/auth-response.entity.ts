import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseEntity {
  @ApiProperty({
    example: 'username',
  })
  username: string;

  @ApiProperty({
    example: '46asd78123b78123azs897123vhj1238',
  })
  token: string;
}
