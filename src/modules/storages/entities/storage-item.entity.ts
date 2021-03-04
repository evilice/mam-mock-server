import { ApiProperty } from '@nestjs/swagger';

export class StorageItem {
  @ApiProperty()
  name: string;
}
