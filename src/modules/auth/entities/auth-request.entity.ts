import { ApiProperty } from '@nestjs/swagger';

export class AuthRequestEntity {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
