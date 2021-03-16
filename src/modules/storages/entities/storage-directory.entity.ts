import { ApiProperty } from '@nestjs/swagger';
import { StorageItem } from './storage-item.entity';
import { StorageFile } from './storage-file.entity';

export class StorageDirectory extends StorageItem {
  @ApiProperty()
  id: string;
  children: {
    [key: string]: StorageDirectory | StorageFile;
  };
}
