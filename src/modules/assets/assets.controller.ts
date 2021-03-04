import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AssetCreateDto } from './dto';
import { Asset } from './entities/asset.entity';

@ApiTags('Assets')
@Controller('assets')
export class AssetsController {
  constructor(private readonly service: AssetsService) {}

  @Get()
  @ApiOperation({ summary: 'Get list assets' })
  @ApiResponse({ status: 200, type: [Asset] })
  async getAssets(): Promise<Array<Asset>> {
    return this.service.getAssets();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get asset' })
  @ApiResponse({ status: 200, type: Asset })
  async getAsset(@Param('id') id: string): Promise<Asset> {
    return this.service.getAsset(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new asset' })
  @ApiResponse({ status: 201, type: Asset })
  async createAsset(@Body() createAssetDto: AssetCreateDto): Promise<Asset> {
    return this.service.createAsset(createAssetDto);
  }

  @Put()
  @ApiOperation({ summary: 'Update asset' })
  @ApiResponse({ status: 200, type: Asset })
  async updateAsset(@Body() asset: Asset): Promise<Asset> {
    return this.service.updateAsset(asset);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete asset by id' })
  @ApiResponse({ status: 200 })
  async deleteAsset(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteAsset(id);
  }
}
