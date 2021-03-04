import { ApiProperty } from '@nestjs/swagger';
import { StorageItem } from './storage-item.entity';

export class StorageFile extends StorageItem {
  @ApiProperty()
  assetId: string;
}
