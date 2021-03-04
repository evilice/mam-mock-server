import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MarkersService } from './markers.service';
import { Marker } from './etities/marker.entity';

@ApiTags('Markers')
@Controller('markers')
export class MarkersController {
  constructor(private readonly service: MarkersService) {}

  @Get(':assetId')
  @ApiOperation({ summary: 'Get list markers by asset-id' })
  @ApiResponse({
    status: 200,
    type: [Marker],
  })
  async getMarkers(@Param('assetId') assetId: string): Promise<Array<Marker>> {
    return this.service.getMarkers(assetId);
  }

  @Post(':assetId')
  @ApiOperation({ summary: 'Update markers' })
  @ApiResponse({
    status: 200,
    type: [Marker],
  })
  async updateMarkers(
    @Param('assetId') assetId: string,
    @Body() markers: Array<Marker>,
  ): Promise<boolean> {
    return this.service.updateMarkers(assetId, markers);
  }

  @Delete(':assetId')
  @ApiOperation({ summary: 'Delete markers' })
  @ApiResponse({
    status: 200,
  })
  async deleteMarkers(@Param('assetId') assetId: string): Promise<boolean> {
    return this.service.deleteMarkers(assetId);
  }
}
