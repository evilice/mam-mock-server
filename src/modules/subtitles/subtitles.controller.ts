import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubtitlesService } from './subtitles.service';
import { Subtitle } from './entities/subtitle.entity';

@ApiTags('Subtitles')
@Controller('subtitles')
export class SubtitlesController {
  constructor(private readonly service: SubtitlesService) {}

  @Get(':assetId')
  @ApiOperation({ summary: 'Get subtitles list by asset-id' })
  @ApiResponse({ status: 200 })
  async getSubtitles(@Param('assetId') assetId: string): Promise<Subtitle[]> {
    return this.service.getSubtitles(assetId);
  }

  @Post(':assetId')
  @ApiOperation({ summary: 'Set subtitles to asset by asset-id' })
  @ApiResponse({ status: 200 })
  async updateSubtitles(
    @Param('assetId') assetId: string,
    @Body() subtitles: Subtitle[],
  ): Promise<boolean> {
    return this.service.updateSubtitles(assetId, subtitles);
  }

  @Delete(':assetId')
  @ApiOperation({ summary: '' })
  @ApiResponse({ status: 200 })
  async deleteSubtitles(@Param('assetId') assetId: string): Promise<boolean> {
    return this.service.deleteSubtitles(assetId);
  }
}
