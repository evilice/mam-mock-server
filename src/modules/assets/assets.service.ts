import { Injectable } from '@nestjs/common';
import { AssetCreateDto } from './dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  async getAssets(): Promise<Array<Asset>> {
    return new Promise((resolve, reject) => {
      resolve([new Asset(), new Asset()]);
    });
  }

  async getAsset(id: string): Promise<Asset> {
    return new Promise((resolve, reject) => {
      resolve(new Asset());
    });
  }

  async createAsset(asset: AssetCreateDto): Promise<Asset> {
    return new Promise((resolve, reject) => {
      const asset = new Asset();
      resolve(asset);
    });
  }

  async updateAsset(asset: Asset): Promise<Asset> {
    return new Promise((resolve, reject) => {
      resolve(new Asset());
    });
  }

  async deleteAsset(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}
