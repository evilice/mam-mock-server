import { Controller, Get, Query } from '@nestjs/common';
import { StoragesService } from './storages.service';
import { StorageDirectory } from './entities/storage-directory.entity';
import { StorageFile } from './entities/storage-file.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

type TQueryGet = {
  path: string;
};

@ApiTags('Storages')
@Controller('storages')
export class StoragesController {
  constructor(private readonly service: StoragesService) {}

  @Get()
  @ApiOperation({ summary: 'Get storages' })
  @ApiResponse({
    status: 200,
    type: StorageFile,
    isArray: true,
  })
  async getStorages(@Query() { path }: TQueryGet): Promise<StorageDirectory> {
    return this.service.getContent(path);
  }
}
