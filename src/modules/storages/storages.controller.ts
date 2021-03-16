import { Controller, Get, Query } from '@nestjs/common';
import { StoragesService } from './storages.service';
import { StorageDirectory } from './entities/storage-directory.entity';
import { StorageFile } from './entities/storage-file.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

type TQueryGet = {
  path: string;
};
class IFile {
  name: string;
}
type Files = Array<IFile>;

@ApiTags('Storages')
@Controller('storage')
export class StoragesController {
  constructor(private readonly service: StoragesService) {}

  @Get('directories')
  @ApiOperation({ summary: 'Get directories' })
  @ApiResponse({
    status: 200,
    type: StorageDirectory,
    isArray: true,
  })
  async getStorages(@Query() { path }: TQueryGet): Promise<StorageDirectory> {
    return this.service.getContent(path);
  }

  @Get('files')
  @ApiOperation({ summary: 'Get files by directory' })
  @ApiResponse({
    status: 200,
    type: StorageFile,
    isArray: true,
  })
  async getFiles(@Query() { path }: TQueryGet): Promise<Array<StorageFile>> {
    const directory = await this.service.getContent(path);
    const files = Object.values(directory.children).filter(
      (item) => item instanceof StorageFile,
    ) as StorageFile[];
    return files;
  }
}
