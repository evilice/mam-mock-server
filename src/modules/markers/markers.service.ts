import { Injectable } from '@nestjs/common';
import { Marker } from './etities/marker.entity';

type Markers = Array<Marker>;

@Injectable()
export class MarkersService {
  private markers = new Map<string, Markers>();

  async getMarkers(assetId: string): Promise<Markers> {
    return new Promise((resolve) => {
      resolve(this.markers.get(assetId));
    });
  }

  async updateMarkers(assetId: string, markers: Markers): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.markers.set(assetId, markers);
      resolve(true);
    });
  }

  async deleteMarkers(assetId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.markers.delete(assetId);
      resolve(true);
    });
  }
}
