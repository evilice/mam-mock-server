import { Injectable } from '@nestjs/common';
import { Subtitle } from './entities/subtitle.entity';

type Subtitles = Array<Subtitle>;

@Injectable()
export class SubtitlesService {
  private subtitles = new Map<string, Subtitles>();

  async getSubtitles(assetId: string): Promise<Subtitles> {
    return new Promise((resolve, reject) => {
      this.subtitles.get(assetId);
      resolve([new Subtitle()]);
    });
  }

  async updateSubtitles(
    assetId: string,
    subtitles: Subtitles,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.subtitles.set(assetId, subtitles);
      resolve(true);
    });
  }

  async deleteSubtitles(assetId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.subtitles.delete(assetId);
      resolve(true);
    });
  }
}
