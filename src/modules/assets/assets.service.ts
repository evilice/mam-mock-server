import { Injectable } from '@nestjs/common';
import { AssetCreateDto } from './dto';
import { Asset } from './entities/asset.entity';
import generatedAssetsList from './assets.generator';

@Injectable()
export class AssetsService {
  async getAssets(): Promise<Array<Asset>> {
    return new Promise((resolve, reject) => {
      resolve(generatedAssetsList);
    });
  }

  async getAsset(id: number): Promise<Asset> {
    return new Promise((resolve, reject) => {
      const asset = generatedAssetsList.find(
        ({ mediAassetId }) => mediAassetId === id,
      );

      resolve(asset);
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
